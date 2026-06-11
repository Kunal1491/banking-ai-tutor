import { GoogleGenAI } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const GEMINI_MODEL = 'gemini-2.5-flash';

const BANKING_SYSTEM_PROMPT = `You are BankingAI Coach, an expert banking exam preparation assistant specializing in Indian banking exams including IBPS PO, IBPS Clerk, SBI PO, SBI Clerk, RBI, and RRB exams.

Your expertise includes:
- Banking concepts and monetary policy
- Quantitative aptitude and reasoning
- English language and verbal ability
- Current affairs related to banking
- Exam strategies and time management
- Study plans and subject-wise guidance

Provide clear, concise, and helpful answers tailored to banking aspirants. Use examples and practical tips whenever possible. If asked about topics unrelated to banking, politely redirect the conversation back to banking exam preparation.`;

type IncomingChatMessage = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

type GeminiError = {
  code?: number;
  status?: string | number;
  message?: string;
};

const jsonError = (error: string, status: number) =>
  NextResponse.json({ error }, { status });

const isIncomingChatMessage = (
  message: unknown
): message is IncomingChatMessage => {
  if (!message || typeof message !== 'object') {
    return false;
  }

  const candidate = message as Partial<IncomingChatMessage>;

  return (
    (candidate.role === 'user' ||
      candidate.role === 'assistant' ||
      candidate.role === 'system') &&
    typeof candidate.content === 'string'
  );
};

const getErrorDetails = (error: unknown): GeminiError => {
  if (!error || typeof error !== 'object') {
    return {};
  }

  const candidate = error as GeminiError;

  return {
    code: candidate.code,
    status: candidate.status,
    message: candidate.message,
  };
};

const getMessagesFromBody = (body: unknown): IncomingChatMessage[] | null => {
  if (!body || typeof body !== 'object') {
    return null;
  }

  const payload = body as {
    message?: unknown;
    messages?: unknown;
  };

  if (typeof payload.message === 'string') {
    return [{ role: 'user', content: payload.message }];
  }

  if (
    Array.isArray(payload.messages) &&
    payload.messages.every(isIncomingChatMessage)
  ) {
    return payload.messages;
  }

  return null;
};

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return jsonError('Invalid JSON request body', 400);
  }

  const messages = getMessagesFromBody(body);

  if (!messages) {
    return jsonError('Request must include a message or messages array', 400);
  }

  const conversation = messages
    .filter((message) => message.role !== 'system')
    .map((message) => ({
      role: message.role === 'assistant' ? 'model' : 'user',
      content: message.content.trim(),
    }))
    .filter((message) => message.content.length > 0);

  const lastMessage = conversation.at(-1);

  if (!lastMessage || lastMessage.role !== 'user') {
    return jsonError('Message cannot be empty', 400);
  }

  const apiKey = process.env.GEMINI_API_KEY?.trim();

  if (!apiKey) {
    console.error('GEMINI_API_KEY is not configured');
    return jsonError('Gemini API key is not configured', 500);
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: conversation.map((message) => ({
        role: message.role,
        parts: [{ text: message.content }],
      })),
      config: {
        systemInstruction: BANKING_SYSTEM_PROMPT,
        temperature: 0.7,
        maxOutputTokens: 1000,
      },
    });

    const content = response.text?.trim();

    if (!content) {
      return jsonError('Gemini returned an empty response', 502);
    }

    return NextResponse.json({
      role: 'assistant',
      content,
    });
  } catch (error: unknown) {
    console.error('Gemini API error:', error);
    const geminiError = getErrorDetails(error);
    const statusText = String(geminiError.status ?? '').toUpperCase();
    const messageText = geminiError.message ?? '';

    if (
      geminiError.code === 429 ||
      statusText === 'RESOURCE_EXHAUSTED' ||
      messageText.toLowerCase().includes('quota')
    ) {
      return jsonError(
        'Gemini rate limit or quota exceeded. Please try again later.',
        429
      );
    }

    if (geminiError.code === 401 || geminiError.code === 403) {
      return jsonError('Gemini API authentication failed', 401);
    }

    if (geminiError.code === 400) {
      return jsonError('Gemini rejected the chat request', 400);
    }

    return jsonError('Failed to generate Gemini response', 502);
  }
}

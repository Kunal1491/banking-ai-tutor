import { OpenAI } from 'openai';
import { NextRequest, NextResponse } from 'next/server';

const BANKING_SYSTEM_PROMPT = `You are BankingAI Coach, an expert banking exam preparation assistant specializing in Indian banking exams including IBPS PO, IBPS Clerk, SBI PO, SBI Clerk, RBI, and RRB exams.

Your expertise includes:
- Banking concepts and monetary policy
- Quantitative aptitude and reasoning
- English language and verbal ability
- Current affairs related to banking
- Exam strategies and time management
- Study plans and subject-wise guidance

Provide clear, concise, and helpful answers tailored to banking aspirants. Use examples and practical tips whenever possible. If asked about topics unrelated to banking, politely redirect the conversation back to banking exam preparation.`;

const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';

type ChatMessage = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

type OpenAIError = {
  status?: number;
  message?: string;
};

const isChatMessage = (message: unknown): message is ChatMessage => {
  if (!message || typeof message !== 'object') {
    return false;
  }

  const candidate = message as Partial<ChatMessage>;

  return (
    (candidate.role === 'user' ||
      candidate.role === 'assistant' ||
      candidate.role === 'system') &&
    typeof candidate.content === 'string'
  );
};

const getOpenAIError = (error: unknown): OpenAIError => {
  if (!error || typeof error !== 'object') {
    return {};
  }

  const candidate = error as OpenAIError;

  return {
    status: candidate.status,
    message: candidate.message,
  };
};

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages) || !messages.every(isChatMessage)) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY?.trim();

    if (!apiKey) {
      console.error('OPENAI_API_KEY not found in environment variables');
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    if (apiKey.includes('your-actual-key-here')) {
      console.error('OPENAI_API_KEY still contains the setup placeholder');
      return NextResponse.json(
        { error: 'OpenAI API key is still set to the placeholder value' },
        { status: 500 }
      );
    }

    // Initialize OpenAI client with current environment variable
    const openai = new OpenAI({
      apiKey,
    });

    // Format messages for OpenAI API
    const formattedMessages = messages.map((msg: ChatMessage) => ({
      role: msg.role,
      content: msg.content,
    }));

    const response = await openai.chat.completions.create({
      model: OPENAI_MODEL,
      messages: [
        {
          role: 'system',
          content: BANKING_SYSTEM_PROMPT,
        },
        ...formattedMessages,
      ],
      temperature: 0.7,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const assistantMessage =
      response.choices[0]?.message?.content || 'Unable to generate response';

    return NextResponse.json({
      content: assistantMessage,
      role: 'assistant',
    });
  } catch (error: unknown) {
    console.error('OpenAI API Error:', error);
    const openAIError = getOpenAIError(error);

    if (openAIError.status === 401) {
      return NextResponse.json(
        { error: 'Invalid OpenAI API key' },
        { status: 401 }
      );
    }

    if (openAIError.status === 429) {
      return NextResponse.json(
        { error: 'OpenAI rate limit or quota exceeded. Please check your billing/credits or try again later.' },
        { status: 429 }
      );
    }

    if (openAIError.status === 404) {
      return NextResponse.json(
        { error: `OpenAI model not available: ${OPENAI_MODEL}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: openAIError.message || 'Failed to process chat request' },
      { status: 500 }
    );
  }
}

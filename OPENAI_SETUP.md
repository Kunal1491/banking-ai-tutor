# OpenAI Integration Setup Guide

## What's Been Configured

Your banking chatbot now uses **OpenAI's GPT-3.5-turbo** model to provide intelligent responses for banking aspirants.

### Files Updated/Created:

1. **`app/api/chat/route.ts`** - API endpoint that handles chat requests
   - Uses GPT-3.5-turbo model
   - Includes banking-specific system prompt
   - Handles errors gracefully

2. **`components/ChatWindow.tsx`** - Updated to call OpenAI API
   - Sends user messages to the backend
   - Displays AI responses in real-time
   - Shows error messages if API fails

3. **`package.json`** - Added OpenAI dependency
   - Installed `openai` package v4.52.0

4. **`.env.local`** - Added OPENAI_API_KEY configuration
   - Ready for your API key

## Setup Instructions

### Step 1: Get Free OpenAI API Key

1. Visit [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Create an OpenAI account (free)
3. Generate a new API key
4. OpenAI provides **$5 in free trial credits** for new accounts

### Step 2: Add API Key to Environment

Edit `.env.local` and replace the placeholder:

```
OPENAI_API_KEY=sk-proj-your-actual-key-here
```

### Step 3: Install Dependencies

Run in the project directory:

```bash
npm install
```

### Step 4: Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000/chat` and test the chatbot!

## Features

- **Banking-Focused AI**: The system prompt specializes the AI for banking exam preparation
- **Expert Topics**: Covers IBPS, SBI, RBI, RRB exams and banking concepts
- **Real-time Chat**: Instant responses using OpenAI's GPT-3.5-turbo
- **Error Handling**: Graceful error messages if API key is missing or quota exceeded

## API Limits

- **Free Trial**: $5 credit (usually lasts for 3 months)
- **Rate Limits**: 3 requests/minute for free accounts
- **Model**: GPT-3.5-turbo (fast and cost-effective)

## Troubleshooting

**"OpenAI API key not configured"**
- Check `.env.local` has `OPENAI_API_KEY` set correctly
- Restart dev server after updating `.env.local`

**"Invalid OpenAI API key"**
- Verify the key is correct from OpenAI dashboard
- Check the key hasn't been revoked

**"Rate limit exceeded"**
- Wait a moment before sending next message
- Upgrade to paid plan for higher limits

## Next Steps

- Customize the banking system prompt in `app/api/chat/route.ts`
- Add conversation history persistence with Supabase
- Implement follow-up questions feature
- Add file upload for study materials

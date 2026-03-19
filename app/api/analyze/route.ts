
import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: Request) {
  const body = await req.json()

  const prompt = `
User debt: ${body.amount}

Provide:
1) Summary
2) Top 3 actions
Keep it simple, practical, and calm.
`

  const completion = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [{ role: "user", content: prompt }]
  })

  return Response.json({
    result: completion.choices[0].message.content
  })
}

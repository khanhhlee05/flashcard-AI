import { NextResponse } from "next/server";
import OpenAI from "openai";


const systemPrompt = `
You are a flashcard creator, you take in text and create multiple flashcards from it. Make sure to create exactly 10 flashcards.
Both front and back should be one sentence long.
Only generates maximum 10 flashcards if the user does not specify the number of flashcards that they wanted.
only reply with the exact below formatted JSON nothing else will be returned
You should return in the following JSON format:

{
  "flashcards":[
    {
      "front": "Front of the card",
      "back": "Back of the card"
    }
  ]
}


`


export async function POST(req){
    const openai = new OpenAI({
        baseURL: "https://openrouter.ai/api/v1",
        apiKey: process.env.OPENROUTER_API_KEY //modify this 
    })

    const data = await req.text()
    const completion = await openai.chat.completions.create({
        messages: [
            {role : "system", content : systemPrompt },
            {role : "user", content : data}
        ],
        model: "meta-llama/llama-3.1-8b-instruct:free"
    })

    const flashcards = JSON.parse(completion.choices[0].message.content)

    return NextResponse.json(flashcards.flashcards)
}
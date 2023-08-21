// pages/api/listPolls.js
import { createClient } from "contentful";
import { NextResponse } from 'next/server'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export async function GET() {
    try {
      const data = await client.getEntries({ content_type: 'poll' });
      const polls = data.items.map(item => ({
        id: item.sys.id,
        question: item.fields.question,
        options: item.fields.options.map(option => ({
          id: option.sys.id,
          text: option.fields.text,
          votes: option.fields.votes
        }))
      }));

      return NextResponse.json({ polls });
    } catch (error) {
      console.log(error)
      return NextResponse.json({ error: 'Error fetching polls' });
    }
};

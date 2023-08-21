// pages/api/vote.js
import { createClient as createManagementClient } from 'contentful-management';
import { NextResponse } from 'next/server'

const client = createManagementClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN
});

export async function POST(req) {
    const {optionId } = await req.json();

    try {
      const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID);
      const environment = await space.getEnvironment('master'); 
      const entry = await environment.getEntry(optionId);

      // Update the vote count
      entry.fields.votes['en-US']++; // Assuming the locale is 'en-US'
      const updatedEntry = await entry.update();
      await updatedEntry.publish();

      return NextResponse.json({ message: 'Vote counted' });
    } catch (error) {
      return NextResponse.json({ error: 'Error updating vote' });
    }
};

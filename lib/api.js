// lib/api.js

import { createClient } from "contentful";
import { createClient as contentfulManagementClient } from 'contentful-management';


export async function getLandingPage() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  
  const res = await client.getEntries({ content_type: "pageLanding" });
  const items = res.items.map((item) => item.fields);
  return items.find((blog) => blog.internalName === "Homepage");

}

export async function getBlogs() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  
  const res = await client.getEntries({ content_type: "pageBlogPost" });
  return res.items.map((item) => item.fields);
}

export async function createBlog(newBlog) {

  const client = contentfulManagementClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  });

  const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID);
  const environment = await space.getEnvironment('master');  // You might want to replace 'master' with your environment name if different

  const blogEntry = await environment.createEntry('pageBlogPost', { 
    fields: {
      internalName: {
        'en-US': newBlog.internalName,
      },
      seoFields: {
        'en-US': newBlog.seoFields,
      },
      slug: {
        'en-US': newBlog.slug,
      },
      author: {
        'en-US': newBlog.author,
      },
      publishedDate: {
        'en-US': newBlog.publishedDate,
      },
      title: {
        'en-US': newBlog.title,
      },
      shortDescription: {
        'en-US': newBlog.shortDescription,
      },
      featuredImage: {
        'en-US': newBlog.featuredImage,
      },
      content: {
        'en-US': newBlog.content,
      },
      relatedBlogPosts: {
        'en-US': newBlog.relatedBlogPosts,
      },
    },
  });

  return blogEntry;
}

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getLandingPage } from "../lib/api";
import Image from "next/image";

export default async function Home() {
  const { entryTitle, featuredBlogPost } = await getLandingPage();
  return (
    <div className="container mx-auto px-4 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="my-8">
        <h1 className="text-5xl mb-4 text-blue-600">Blogs App</h1>
        <p className="text-lg text-600 mb-8">Welcome to the blogs app!</p>
      </div>
      <div className="my-8 bg-gray-100 rounded-lg shadow-md p-8 flex">
        <div className="w-1/2">
          <h3 className="text-3xl mb-2 text-blue-500">Featured Blog Post</h3>
          <h4 className="text-xl mb-2 text-blue-400 ">
            {featuredBlogPost.fields.title}
          </h4>
          <p className="text-gray-700">
            {featuredBlogPost.fields.shortDescription}
          </p>
        </div>
        <div className="w-1/2 flex items-center mx-auto">
          <Image
            src={
              "https:" + featuredBlogPost.fields.featuredImage.fields.file.url
            }
            alt={featuredBlogPost.fields.title}
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

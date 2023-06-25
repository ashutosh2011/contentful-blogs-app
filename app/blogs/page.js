// app/blogList.js

import { getBlogs } from "../../lib/api";
import Link from "next/link";
import Image from "next/image";

export default async function BlogList() {
  const blogs = await getBlogs();
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold text-900">Blog List</h1>
    {blogs.map((blog) => (
      <div key={blog.slug} className="my-4 shadow overflow-hidden sm:rounded-lg flex">
        <div className="w-1/3">
          <Image 
            src={`https:${blog.featuredImage.fields.file.url}`} 
            alt={blog.title} 
            width={500} 
            height={300} 
            objectFit="cover"
            unoptimized
          />
        </div>
        <div className="px-4 py-5 sm:px-6 w-2/3">
          <h3 className="text-lg leading-6 font-medium text-900">
            {blog.title}
          </h3>
          <p className="mt-1 text-sm text-500">
            {blog.shortDescription}
          </p>
          <Link href={`/blogs/${blog.slug}`}>
            <div className="text-indigo-600 hover:text-indigo-900 mt-2 cursor-pointer">Read More</div>
          </Link>
        </div>
      </div>
    ))}
  </div>
);
}

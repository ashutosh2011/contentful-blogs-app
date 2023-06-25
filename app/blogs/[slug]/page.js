import { getBlogs } from "../../../lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export default async function Blog({ params }) {
  const blog = await getBlog({ slug: params.slug });
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-900 mt-4">{blog.title}</h1>
      <p className="mt-2 text-sm text-500">
        Published on {new Date(blog.publishedDate).toLocaleDateString()}
      </p>

      <Image
        src={`https:${blog.featuredImage.fields.file.url}`}
        alt={blog.title}
        width={1200}
        height={600}
        objectFit="cover"
        unoptimized
      />
      <div className="mt-4 text-lg text-900">
        {documentToReactComponents(blog.content)}
      </div>
    </div>
  );
}

export async function getBlog(params) {
  const blogs = await getBlogs();
  const blog = blogs.find((blog) => blog.slug === params.slug);
  return blog;
}

"use client";
import { useForm } from "react-hook-form";
import { createBlog } from "../../../lib/api";

export default function CreateBlog() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const newBlog = {
        internalName: data.internalName,
        seoFields: data.seoFields,
        slug: data.slug,
        author: data.author,
        publishedDate: data.publishedDate,
        title: data.title,
        shortDescription: data.shortDescription,
        featuredImage: data.featuredImage,
        content: data.content,
        relatedBlogPosts: data.relatedBlogPosts,
      };

      const response = await createBlog(newBlog);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 bg rounded shadow-xl space-y-6 container mx-auto"
    >
      <div className="mb-6">
        <label
          className="block text-700 text-sm font-bold mb-2"
          htmlFor="internalName"
        >
          Internal Name
        </label>
        <input
          {...register("internalName")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="internalName"
          type="text"
          placeholder="Internal Name"
        />
      </div>

      <div className="mb-6">
        <label
          className="block text-700 text-sm font-bold mb-2"
          htmlFor="seoFields"
        >
          SEO Fields
        </label>
        <input
          {...register("seoFields")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="seoFields"
          type="text"
          placeholder="SEO Fields"
        />
      </div>

      <div className="mb-6">
        <label className="block text-700 text-sm font-bold mb-2" htmlFor="slug">
          Slug
        </label>
        <input
          {...register("slug")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="slug"
          type="text"
          placeholder="Slug"
        />
      </div>

      <div className="mb-6">
        <label
          className="block text-700 text-sm font-bold mb-2"
          htmlFor="author"
        >
          Author
        </label>
        <input
          {...register("author")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="author"
          type="text"
          placeholder="Author"
        />
      </div>

      <div className="mb-6">
        <label
          className="block text-700 text-sm font-bold mb-2"
          htmlFor="publishedDate"
        >
          Published Date
        </label>
        <input
          {...register("publishedDate")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="publishedDate"
          type="date"
          placeholder="Published Date"
        />
      </div>

      <div className="mb-6">
        <label
          className="block text-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <input
          {...register("title")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="Title"
        />
      </div>

      <div className="mb-6">
        <label
          className="block text-700 text-sm font-bold mb-2"
          htmlFor="shortDescription"
        >
          Short Description
        </label>
        <textarea
          {...register("shortDescription")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="shortDescription"
          placeholder="Short Description"
        ></textarea>
      </div>
      <div className="mb-6">
        <label
          className="block text-700 text-sm font-bold mb-2"
          htmlFor="featuredImage"
        >
          Featured Image
        </label>
        <textarea
          {...register("featuredImage")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="shortDescription"
          placeholder="Short Description"
        ></textarea>
      </div>
      <div className="mb-6">
        <label
          className="block text-700 text-sm font-bold mb-2"
          htmlFor="content"
        >
          Content
        </label>
        <textarea
          {...register("content")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="shortDescription"
          placeholder="Short Description"
        ></textarea>
      </div>
      <div className="mb-6">
        <label
          className="block text-700 text-sm font-bold mb-2"
          htmlFor="relatedBlogPosts"
        >
          Related Blog Posts
        </label>
        <textarea
          {...register("relatedBlogPosts")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="shortDescription"
          placeholder="Short Description"
        ></textarea>
      </div>

      <button type="submit" className="mt-3 p-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </form>
  );
}

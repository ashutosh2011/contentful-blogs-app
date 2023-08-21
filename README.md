# Next.js Contentful Blog POC

This isn't just a "Hello World" project; it's a "Hello Universe" project. I've delved into the cosmic landscape of Contentful and Next.js to create this proof of concept. The aim is to showcase how you can integrate Contentful, a headless CMS, with Next.js, a React-based framework, to create a simple yet dynamic blog platform. Let's embark on this journey to discover the magic of Contentful integration.

## 🚀 Getting Started

1. **Install Dependencies**: To get this project up and running, run `npm install`.

2. **Set up Contentful**: Head over to Contentful and generate your Space ID and Access Tokens if you haven't already.

3. **Create Environment Variables**: Create a `.env.local` file in the root directory and add the following lines:

    ```sh
    CONTENTFUL_SPACE_ID=your_space_id
    CONTENTFUL_ACCESS_TOKEN=your_access_token
    ```

4. **Start the Project**: Run `npm run dev` to start the development server. Open `http://localhost:3000` to see the blog.

## 🧩 Project Architecture

This project consists of several key components:

- **app**: This is where the pages of the application are. Each file corresponds to a route in the application.
- **components**: These are the reusable UI components.
- **lib**: This is where utility functions, including API calls to Contentful, reside.
- **styles**: Contains global styles and utility classes.

## 🌟 Why Next.js?

I chose Next.js for several reasons:

- **Hybrid Static and Server Rendering**: Ideal for a blog platform that benefits from both speed and flexibility.
- **Pre-rendering**: Great for SEO and performance.
- **Automatic Code Splitting**: Faster page loads.
- **React**: It's built on React, which offers power and flexibility.

## 🌌 Why Contentful?

I chose Contentful because:

- **Scalability**: It can scale with my needs.
- **Performance**: Contentful's CDN ensures fast content delivery.
- **Developer Experience**: The API and documentation are straightforward.
- **Flexibility**: I can model content as needed.
- **Editor Experience**: The interface is easy to use.

## 🗳 Poll Feature

I've added a poll feature to this project! Now, not only can you read content, but you can also vote in various polls.

### How to Interact with the Poll Feature

#### 1️⃣ List Polls

To get a list of available polls, send a GET request to `/api/listPolls`.

Example using `curl`:

```bash
curl http://localhost:3000/api/listPolls
```

#### 2️⃣ Cast a Vote

To vote, send a POST request to `/api/vote` with a JSON payload containing the `optionId`.

Example using `curl`:

```bash
curl -X POST http://localhost:3000/api/vote -H "Content-Type: application/json" -d '{"optionId":"your_option_id_here"}'
```

### Environment Variables for Polls

Don't forget to add the Contentful Management API Access Token to the `.env.local` file:

```sh
CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN=your_management_api_token_here
```

This allows you to interact with the polls. Happy voting!

---

You can place this revised section at the bottom of your README to guide users on how to interact with the new poll feature.

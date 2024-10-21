import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "posts",
    }),
    addPost: builder.mutation<Post, Partial<Post>>({
      query: (newPost) => ({
        url: "posts",
        method: "POST",
        body: newPost,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation } = postsApi;

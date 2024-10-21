"use client";

import { useState } from "react";
import { useGetPostsQuery } from "../lib/services/posts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function PostList() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { data: posts, error, isLoading } = useGetPostsQuery();

  if (isLoading)
    return (
      <div className="flex w-full justify-center items-center h-[calc(100vh-9rem)]">
        <p className="text-xl">Loading...</p>
      </div>
    );
  if (error) return <div>Error: {error.toString()}</div>;
  if (!posts) return <div>No posts found</div>;

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedPosts = filteredPosts.slice((page - 1) * 10, page * 10);

  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paginatedPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{post.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-between">
        <Button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Previous
        </Button>
        <Button
          onClick={() => setPage((p) => p + 1)}
          disabled={page * 10 >= filteredPosts.length}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

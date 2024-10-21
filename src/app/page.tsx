import { PostList } from "@/components/post-list";
import { AddPostDialog } from "@/components/add-post-form-dialog";

export default function Home() {
  return (
    <main className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-3xl font-bold mb-4 flex justify-center">Posts App</h1>
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Posts</h2>
          <AddPostDialog />
        </div>
        <PostList />
      </div>
    </main>
  );
}

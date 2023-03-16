import { useLoaderData } from 'react-router-dom';

import { PostData, NewPostData } from './type';

import { PostsList } from './PostsList';
import { savePost } from './savePost';
import { NewPostForm } from './NewPostForm';

import { assertIsPosts } from './getPosts';

export function PostsPage() {
  const posts = useLoaderData();
  assertIsPosts(posts);

  async function handleSave(newPost: NewPostData) {
    await savePost(newPost);
  }

  return (
    <div className="w-96 mx-auto mt-6">
      <h2 className="text-xl text-slate-900 font-bold">Posts</h2>
      <NewPostForm onSave={handleSave} />
      <PostsList posts={posts} />
    </div>
  );
}

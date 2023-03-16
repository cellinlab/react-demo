import { useState, useEffect } from 'react';
import { getPosts } from './getPosts';
import { PostData, NewPostData } from './type';
import { PostsList } from './PostsList';
import { savePost } from './savePost';
import { NewPostForm } from './NewPostForm';

export function PostsPage() {
  console.log('PostsPage');
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    console.log('useEffect');
    let cancel = false;
    getPosts().then((data) => {
      if (!cancel) {
        setPosts(data);
        setIsLoading(false);
      }
    });
    return () => {
      cancel = true;
    };
  }, []);

  async function handleSave(newPost: NewPostData) {
    const savedPost = await savePost(newPost);
    setPosts([savedPost, ...posts]);
  }

  if (isLoading) {
    console.log('isLoading');
    return <div className="w-96 mx-auto mt-6">Loading...</div>;
  }
  return (
    <div className="w-96 mx-auto mt-6">
      <h2 className="text-xl text-slate-900 font-bold">Posts</h2>
      <NewPostForm onSave={handleSave} />
      <PostsList posts={posts} />
    </div>
  );
}

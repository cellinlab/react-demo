import { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { PostData } from './type';

import { PostsList } from './PostsList';
import { savePost } from './savePost';
import { NewPostForm } from './NewPostForm';

import { assertIsPosts, getPosts } from './getPosts';

type Data = {
  posts: PostData[];
};

export function assertIsData(data: unknown): asserts data is Data {
  if (typeof data !== 'object') {
    throw new Error('Data is not an object');
  }
  if (data === null) {
    throw new Error('Data is null');
  }
  if (!('posts' in data)) {
    throw new Error('Data does not have a posts property');
  }
}

export function PostsPage() {
  // const data = useLoaderData();
  // assertIsData(data);

  const { isLoading, isFetching, data: posts } = useQuery(['postsData'], getPosts);
  const queryClient = useQueryClient();

  const { mutate } = useMutation(savePost, {
    onSuccess: (savedPost) => {
      queryClient.setQueryData<PostData[]>(['postsData'], (oldData) => {
        if (oldData === undefined) {
          return [savedPost];
        }
        return [savedPost, ...oldData];
      });
    },
  });

  if (isLoading || posts === undefined) {
    return <div className="w-96 mx-auto mt-6">Loading...</div>;
  }

  return (
    <div className="w-96 mx-auto mt-6">
      <h2 className="text-xl text-slate-900 font-bold">Posts</h2>
      <NewPostForm onSave={mutate} />
      {/* <Suspense fallback={<div>Fetching...</div>}>
        <Await resolve={data.posts}>
          {(posts) => {
            assertIsPosts(posts);
            return <PostsList posts={posts} />;
          }}
        </Await>
      </Suspense> */}
      {/* rerender when fetching */}
      {/* {isFetching ? <div>Fetching...</div> : <PostsList posts={posts} />} */}
      {/* using cache */}
      <PostsList posts={posts} />
    </div>
  );
}

import { PostData } from './type';

const BASE_URL = process.env.REACT_APP_API_URL;

export async function getPosts() {
  const response = await fetch(BASE_URL!);
  const body = (await response.json()) as unknown;
  assertIsPosts(body);
  return body;
}

export function assertIsPosts(postData: unknown): asserts postData is PostData[] {
  if (!Array.isArray(postData)) {
    throw new Error('posts data is not an array');
  }
  if (postData.length === 0) {
    return;
  }
  postData.forEach((post) => {
    if (!('id' in post)) {
      throw new Error('post data is missing id');
    }
    if (typeof post.id !== 'number') {
      throw new Error('post id is not a number');
    }
    if (!('title' in post)) {
      throw new Error('post data is missing title');
    }
    if (typeof post.title !== 'string') {
      throw new Error('post title is not a string');
    }
    if (!('description' in post)) {
      throw new Error('post data is missing description');
    }
    if (typeof post.description !== 'string') {
      throw new Error('post description is not a string');
    }
  });
}

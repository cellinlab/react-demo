import { NewPostData, SavedPostData } from './type';

export async function savePost(post: NewPostData) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  const body = (await response.json()) as unknown;
  assertIsSavedPost(body);
  return {
    ...post,
    ...body,
  };
}

export function assertIsSavedPost(postData: any): asserts postData is SavedPostData {
  if (!('id' in postData)) {
    throw new Error('post data is missing id');
  }
  if (typeof postData.id !== 'number') {
    throw new Error('post id is not a number');
  }
}

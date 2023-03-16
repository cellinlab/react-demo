import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider, defer } from 'react-router-dom';

import { PostsPage } from './posts/PostsPage';

import { getPosts } from './posts/getPosts';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <PostsPage />,
    loader: async () => defer({ posts: getPosts() }),
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;

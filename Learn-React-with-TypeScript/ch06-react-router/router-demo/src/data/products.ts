export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'React Router',
    price: 30,
    description:
      'A collection of navigational components that compose declaratively with your application',
  },
  {
    id: 2,
    name: 'React Redux',
    price: 45,
    description: 'A library for managing and updating application state',
  },
  {
    id: 3,
    name: 'React Hook Form',
    price: 25,
    description: 'A library that helps with building forms in React',
  },
  {
    id: 4,
    name: 'React Apollo',
    price: 35,
    description: 'A library for using GraphQL in React',
  },
  {
    id: 5,
    name: 'Tailwind CSS',
    price: 20,
    description: 'A utility-first CSS framework',
  },
];

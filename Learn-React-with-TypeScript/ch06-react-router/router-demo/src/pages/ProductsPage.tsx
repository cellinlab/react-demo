import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';

export function ProductsPage() {
  const [searchParams] = useSearchParams();

  const getFilteredProducts = () => {
    const search = searchParams.get('search');
    if (search === null || search === '') {
      return products;
    } else {
      return products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    }
  };

  return (
    <div className="text-center p-5">
      <h2 className="text-xl font-bold text-slate-600">Here are some greet tools for React</h2>
      <ul className="list-none m-0 p-0">
        {getFilteredProducts().map((product) => {
          return (
            <li key={product.id} className="p-1 text-base text-slate-800">
              <Link
                to={`/product/${product.id}`}
                className="p-1 text-base text-slate-800 hover:underline"
              >
                {product.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

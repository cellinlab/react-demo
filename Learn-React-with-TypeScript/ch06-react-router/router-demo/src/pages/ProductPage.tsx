import { useParams } from 'react-router-dom';

import { products } from '../data/products';

type Params = {
  id: string;
};

export function ProductPage() {
  const params = useParams<Params>();
  const id = params.id === undefined ? undefined : parseInt(params.id, 10);
  const product = products.find((p) => p.id === id);

  return (
    <div className="text-center p-5 text-xl">
      {product === undefined ? (
        <h1 className="text-xl text-slate-900">
          Unknow product with id {id === undefined ? 'undefined' : id}
        </h1>
      ) : (
        <>
          <h1 className="text-xl text-slate-900">{product.name}</h1>
          <p className="text-base to-slate-800">{product.description}</p>
          <p className="text-base text-slate-800">
            {new Intl.NumberFormat('en-US', {
              currency: 'USD',
              style: 'currency',
            }).format(product.price)}
          </p>
        </>
      )}
    </div>
  );
}

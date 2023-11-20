import { apiProducts } from '@/mocks/apiProducts';
import ProductCard from '@/components/ProductCard/ProductCard';
import { ProductType } from '@/types/products';

export default function ProductsPage() {
  return <section className='h-screen p-2 text-center'>
    <h1 className="text-3xl font-bold">Catálogo de Produtos</h1>
    <div className='flex flex-wrap bg-gray-100'>
      {apiProducts?.map((product: ProductType) =>
        <ProductCard product={product} key={product.id} />
      )}
    </div>
  </section>;
}
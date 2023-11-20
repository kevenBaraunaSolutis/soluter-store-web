import { ProductType } from '@/types/products';
import Image from 'next/image'
import React from 'react';


const ProductCard = ({ product }: { product: ProductType }) => {
    return (
        <div key={product.id} className='h-96 w-72 rounded-lg p-7 bg-white m-3 cursor-pointer hover:shadow-md'>
            <Image className='mx-auto p-3' src={product.image} alt={product.name} width={'120'} height={'150'}/>
            <hr />
            <p className='text-2xl font-bold text-black p-2'>{product.name}</p>
            <p className='text-sm text-left p-1 text-gray-600'>{product.description}</p>
            <p className='text-xl text-gray-700 text-left p-1'>R$ {product.price}</p>
        </div>
    );
};

export default ProductCard;
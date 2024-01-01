import React from 'react';
import Link from 'next/link';
import { getProducts } from '@/service/products';
import MeowArticle from '@/components/MeowArticle';
import Image from 'next/image';
import clothesImage from '../../../public/images/clothes.jpg';

//export const revalidate = 3;

export default async function ProductsPage() {
  //throw new Error();
  const products = await getProducts();
  
  return (
    <>
      <h1>제품 소개 페이지</h1>
      <Image src={clothesImage} alt='Clothes' priority/>
      <ul>
        {products.map((product, index) =><li key={index}>
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </li>)}
      </ul>
      <MeowArticle />
    </>
  );
}


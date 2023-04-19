import Categorie from '@/components/Categorie'
import Hero from '@/components/Hero'
import Product from '@/components/Product'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Hero/>
      <Product/>
      <Categorie/>
    </>
  )
}

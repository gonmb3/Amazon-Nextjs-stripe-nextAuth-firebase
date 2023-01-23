import React from 'react'
import Layout from './../components/layout/Layout';
import Banner from './../components/Banner';

import Products from "./../components/Products"


const Home = ({products}) => {
 

  return (
    <Layout title="Home">
    {  /* banner component (slider)*/}
      <Banner/>

      {  /*All products component*/}
    
      <Products products={products} />
   

    </Layout>
  )
}

export default Home


export async function getServerSideProps(ctx){
  const products = await fetch("https://fakestoreapi.com/products").then(
    res => res.json()
  )

  return{
    props:{
      products
    }
  }
}
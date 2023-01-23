import Product from "./Product"

const Products = ({products}) => {

   

  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 md:-mt-48 mx-auto ">
          {
            products.map(product => (
              <Product  key={product.id}
              products={product}/>
            ))
          } 
      
     </div>
  )
}

export default Products
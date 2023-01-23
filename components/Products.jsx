import Product from "./Product"

const Products = ({products}) => {

  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 md:-mt-52 mx-auto ">
          {
            products.slice(0,4).map(product => (
              <Product  key={product.id}
              products={product}/>
            ))
          } 

        {  /* banner */}
        <img src="http://links.papareact.com/dyz" alt=""  className="md:col-span-full"/>
        
        <div className="md:col-span-2">
        {
            products.slice(4,5).map(product => (
              <Product  key={product.id}
              products={product}/>
            ))
          } 
        </div>

        {
            products.slice(5, products.length).map(product => (
              <Product  key={product.id}
              products={product}/>
            ))
          } 
      
     </div>
  )
}

export default Products
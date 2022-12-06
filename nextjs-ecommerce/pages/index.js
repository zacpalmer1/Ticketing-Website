import {useEffect, useState} from "react";
import Product from "../components/Product";
import {initMongoose} from "../lib/mongoose";
import {findAllProducts} from "./api/products";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

export default function Home({products}) {
  
  const [phrase,setPhrase] = useState('');
  const categoriesNames = [...new Set(products.map(p => p.category))];

  if (phrase) {
    products = products.filter(p => p.name.toLowerCase().includes(phrase));
  }

  return (
    <body className="background">
    <Layout>
      <input value={phrase} onChange={e => setPhrase(e.target.value)} type="text" placeholder="Search for an event" className=" bg-gray-500 w-full py-4 px-8 rounded-xl"/>
        
      <div>
      
        {categoriesNames.map(categoryName => (
          <div key={categoryName} >
            {products.find(p => p.category === categoryName) && (
              <div>
                <h2 className="text-2xl py-5 capitalize">{categoryName}</h2>
                <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
                  {products.filter(p => p.category === categoryName).map(productInfo => (
                    <div key={productInfo._id} className="px-5 snap-start">
                      <Product {...productInfo} />
                    </div> 
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    
    </Layout>
    </body>
  )
}

export async function getServerSideProps() {
  await initMongoose();
  const products = await findAllProducts();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}

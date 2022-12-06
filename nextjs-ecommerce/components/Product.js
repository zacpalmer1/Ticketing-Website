import Image from "next/image";
import {useContext} from "react";
import {ProductsContext} from "./ProductsContext";

export default function Product({_id,name,price,quanity,description,picture}) {
  const {setSelectedProducts} = useContext(ProductsContext);
  function addProduct() {
    setSelectedProducts(prev => [...prev,_id]);
  }
  return (
    <div className="w-52">
      <div className=" hover:bg-red-400 p-2 rounded-xl">
        <button onClick={addProduct} className=" text-white py-50 px-50 rounded-xl">
        <img src={picture} alt="" className="rounded-xl"/>
        </button>
      </div>
      <div className="mt-2">
        <h3 className="games font-bold text-lg ">{name}</h3>
      </div>
        <p class="tickets"> {quanity} tickets remaining</p>
      
      <div className="flex mt-1">
        <div className="text-2xl font-bold grow">${price}</div>
        <button onClick={addProduct} className="bg-red-400 hover:bg-red-600 text-white py-1 px-3 rounded-xl">+</button>
      </div>
    </div>
  );
}

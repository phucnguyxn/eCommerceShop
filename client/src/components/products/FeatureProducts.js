import React, { useState, useEffect, memo } from "react"
import { ProductCard } from "components"
import { apiGetProducts } from "apis"
import sale from 'assets/sale.gif'
import sale4 from 'assets/sale4.png'
import sale5 from 'assets/sale5.png'
import sale6 from 'assets/sale6.png'

const FeatureProducts = () => {
  const [products, setProducts] = useState(null)

  const fetchProducts = async () => {
    const response = await apiGetProducts({ limit: 9, sort: "-totalRatings" })
    if (response.success) setProducts(response.products)
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  console.log(products)
  return (
    <div className="w-full">
      <h3 className="text-[20px] font-semibold py-[15px] border-b-2 border-main">
      SẢN PHẨM NỔI BẬT
      </h3>
      <div className="flex flex-wrap mt-[15px] mx-[-10px]">
        {products?.map((el) => (
          <ProductCard key={el._id} pid={el._id} image={el.thumb} {...el} />
        ))}
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-4">
        <img
          src={sale}
          alt="sale"
          className="w-full h-full object-cover col-span-2 row-span-2"
        />
        <img
          src={sale4}
          alt="sale4"
          className="w-full h-full object-cover col-span-1 row-span-1"
        />
        <img
          src={sale6}
          alt="sale6"
          className="w-full h-full object-cover col-span-1 row-span-2"
        />
        <img
          src={sale5}
          alt="sale5"
          className="w-full h-full object-cover col-span-1 row-span-1"
        />
      </div>
    </div>
  )
}

export default memo(FeatureProducts)

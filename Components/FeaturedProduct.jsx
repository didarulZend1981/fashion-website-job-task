import React from 'react'
import SectionTitle from './SectionTitle'
import AddToCartButton from './Button'
import Image from 'next/image'
import ArrowButton from './ArrowButton'
import FeatureCard from './FeatureCard'


const products = [
  { id:1, name: 'Indian Sharee', price: '2,300', image: '/images/1.png' },
  { id:2, name: 'Hoodie', price: '4,300', image: '/images/2.jpg' },
  { id:3, name: 'Plazu', price: '300', image: '/images/3.png' },
  { id:4, name: 'Jacket', price: '4,300', image: '/images/4.png' },
  // Add more products here
];

const FeaturedProduct = () => {
    return (
        <div className='mt-5 p-5'>
            <div className='flex items-center justify-between'>
                <SectionTitle subHeader={"FEATURED PRODUCT"} mainHeader={"New Arrivals"} />
                <ArrowButton />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <FeatureCard key={index} product={product} />
                  ))}
           
            </div>

            <div className="flex justify-center items-center h-full mt-4">
              <AddToCartButton
                  text="See more"
                  className="px-6 py-3 rounded-lg bg-[#7E53D4] text-white font-semibold"
                />
               
            </div>

        </div>
    )
}

export default FeaturedProduct

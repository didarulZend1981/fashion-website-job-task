import Image from 'next/image'
import React from 'react'
import FeatureCard from './FeatureCard'

const products = [
  { id:1, name: 'Indian Sharee', price: '2,300', image: '/images/image3.png',rating:3 },
  { id:2, name: 'Hoodie', price: '4,300', image: '/images/image4.png' ,rating:3 },
  { id:3, name: 'Plazu', price: '300', image: '/images/image5.png' ,rating:3 },
  { id:4, name: 'Jacket', price: '4,300', image: '/images/image6.png' ,rating:3 },
  { id:5, name: 'Indian Sharee', price: '2,300', image: '/images/image3.png',rating:3 },
  { id:6, name: 'Hoodie', price: '4,300', image: '/images/image4.png' ,rating:3 },
  { id:7, name: 'Plazu', price: '300', image: '/images/image5.png' ,rating:3 },
  { id:8, name: 'Jacket', price: '4,300', image: '/images/image6.png' ,rating:3 },
  // Add more products here
];


const SummerBigDeal = () => {
    return (
    
        <><div className="text-center p-10">
            <h1 className="font-bold text-4xl mb-4">Responsive Product card grid</h1>
           
        </div><section id="Projects"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                

               {products.map((product, index) => (
                    <FeatureCard key={index} product={product} />
                  ))}



               
            </section></>
    )
}

export default SummerBigDeal
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import FeatureCard from './FeatureCard'
import ArrowButton from './ArrowButton'
import SectionTitle from './SectionTitle'
import AddToCartButton from './Button'



const SummerBigDeal = () => {
        const [products, setProducts] = useState([])
        const [visibleProducts, setVisibleProducts] = useState(4)  // Initially show 4 products
        const [showAll, setShowAll] = useState(false) // To track if all products are shown


        useEffect(() => {
        fetch("product.json")
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching products:", error))
        }, [])


        const handleSeeMore = () => {
            setVisibleProducts(products.length)  // Show all products when "See more" is clicked
            setShowAll(true)  // Set the state to show "Show Less" button
            
        }

        const handleShowLess = () => {
            setVisibleProducts(4)  // Reset to show only 4 products
            setShowAll(false)  // Set the state to show "See More" button
        }

        const productsToDisplay = products.slice(0, visibleProducts);








    return (
    
        <div className='mt-5 p-5'>
        <div className='flex items-center justify-between'>
                <SectionTitle 
                subHeader={"SUMMER"} 
                mainHeader={"Big Deal"} 
                

                />
                <ArrowButton />
            </div>

        <section id="Projects"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                

               {productsToDisplay.map((product, index) => (
                    <FeatureCard key={index} product={product}

                    className="bg-gray-50" 
                    OfferBadge="true" 
                    rating="true"


                     />
                  ))}



               
            </section>

            <div className="flex justify-center items-center h-full mt-4 mb-5">


        
                {showAll ? (
                        <AddToCartButton
                          onClick={handleShowLess}
                          label="Show Less"
                          className="px-6 py-3 rounded-lg bg-[#7E53D4] text-white font-semibold"
                        />
                      ) : (
                        <AddToCartButton
                          onClick={handleSeeMore}
                          label="See More"
                          className="px-6 py-3 rounded-lg bg-[#7E53D4] text-white font-semibold"
                        />
               )}
                      
               
            </div>

        </div>
    )
}

export default SummerBigDeal
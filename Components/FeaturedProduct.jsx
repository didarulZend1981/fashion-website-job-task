import React, { useEffect, useState } from 'react'
import SectionTitle from './SectionTitle'
import AddToCartButton from './Button'
import Image from 'next/image'
import ArrowButton from './ArrowButton'
import FeatureCard from './FeatureCard'




const FeaturedProduct = () => {
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
                <SectionTitle subHeader={"FEATURED PRODUCT"} mainHeader={"New Arrivals"} />
                <ArrowButton />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {productsToDisplay.map((product, index) => (
                    <FeatureCard key={index} product={product} 
                    className="bg-white" 
                    // OfferBadge="true" 
                    // rating="true" 

                    />
                  ))}
           
            </div>


            <div className="flex justify-center items-center h-full mt-4">


        
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

export default FeaturedProduct

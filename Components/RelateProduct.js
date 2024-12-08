import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import AddToCartButton from "./Button";
import ArrowButton from "./ArrowButton";
import FeatureCard from "./FeatureCard";

const RelatedProduct = () => {
  const [products, setProducts] = useState([]); // Full product list
  const [visibleProducts, setVisibleProducts] = useState(4); // Initially display 4 products

  const excludedId = "P001"; // Exclude this product ID

  useEffect(() => {
    // Fetch product data
    fetch("/product.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Filter out the product with the excluded ID
        const filteredData = data.filter((product) => product.productId !== excludedId);
        setProducts(filteredData);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Handler to display 4 more products
  const handleSeeMore = () => {
    setVisibleProducts((prev) => Math.min(prev + 4, products.length)); // Show up to 4 more products
  };

  // Handler to reset to the initial state
  const handleShowLess = () => {
    setVisibleProducts(4); // Reset to show only 4 products
  };

  // Determine if "Show Less" should be displayed
  const showLessButton = visibleProducts > 4;

  // Determine if "See More" should be displayed
  const showMoreButton = visibleProducts < products.length;

  // Slice the product array based on the visible count
  const productsToDisplay = products.slice(0, visibleProducts);

  return (
    <div className="mt-5 p-5">
      <div className="flex items-center justify-between">
        <SectionTitle subHeader={"Related Product"} />
        <ArrowButton />
      </div>

      {/* Display the product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {productsToDisplay.map((product) => (
          <FeatureCard key={product.productId} product={product} />
        ))}
      </div>

      {/* See More / Show Less Buttons */}
      <div className="flex justify-center items-center h-full mt-4 space-x-4">
        {showMoreButton && (
          <AddToCartButton
            onClick={handleSeeMore}
            label="See More"
            className="px-6 py-3 rounded-lg bg-[#7E53D4] text-white font-semibold"
          />
        )}
        {showLessButton && (
          <AddToCartButton
            onClick={handleShowLess}
            label="Show Less"
            className="px-6 py-3 rounded-lg bg-[#7E53D4] text-white font-semibold"
          />
        )}
      </div>
    </div>
  );
};

export default RelatedProduct;
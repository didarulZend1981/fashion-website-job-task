// components/ProductCard.js
import Link from "next/link";
import Image from "next/image";
import AddToCartButton from './Button'

export default function FeatureCard({ product }) {
  console.log(product.image);
  return (
    



    <div className="bg-gray-50 rounded-md overflow-hidden cursor-pointer flex flex-col p-4 gap-2">
                    <div className="flex justify-center items-center overflow-hidden h-full w-full">
                        <Image src={product.image} alt="{product.name}"
                            className="h-[80%] w-[80%] hover:scale-110 transition-all text-center" width={600} height={600} />
                    </div>
                    <div>
                        <div className="flex items-center justify-between gap-5">
                            <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                            <p className="text-lg text-blue-600 font-bold">{product.price}</p>
                        </div>
                    </div>
                    <AddToCartButton
                  text="Add to cart"
                  className="w-full px-5 py-2.5 rounded-lg border border-[#7E53D4] shadow-md text-[#7E53D4] font-semibold text-[16px]"
                />
                      </div>



  );
}
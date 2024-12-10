// components/ProductCard.js
import Link from "next/link";
import Image from "next/image";
import AddToCartButton from './Button'
import StarRating from './StarRating'
import CartContext from "./CartContext";
import { useContext } from "react";

export default function FeatureCard({ product , className,OfferBadge,rating}) {
    
  const { addToCart } = useContext(CartContext);
  console.log(addToCart);
  
  return (
    

    <Link href={`/product/${product?.productId}`}>

    <div className={`rounded-md overflow-hidden cursor-pointer flex flex-col p-2 gap-0 border-2 h-[450px]`}>
                    
                    <div className={`relative flex justify-center items-center overflow-hidden h-full w-full ${className}`}>
  <Image
    src={product.image}
    alt={product.productName}
    className="h-[80%] w-[80%] hover:scale-110 transition-all text-center"
    width={600}
    height={600}
  />

 {OfferBadge ? (
  <div className="absolute top-0 right-4 bg-[#7E53D4] font-manrope text-[12px] font-bold leading-[16.9px] text-center  text-[#FFFFFF] rounded-bl-[22px] rounded-br-[22px] p-2">
    up
  <br/>
  to
  <br/>
  40%
  </div>

  ) : null}


</div>

                    <div>


                        {rating ? (
                        <div className="flex space-x-1.5">
                            <StarRating rating={product.rating} />
                        </div>

                         ) : null}

                         
                        <div className="flex items-center justify-between gap-5">
                            <h3 className="text-lg font-bold text-gray-800">{product.productName}</h3>
                            <p className="text-lg text-blue-600 font-bold">{product.price}</p>
                        </div>
                    </div>
                    
                    <AddToCartButton
                  text="Add to cart"
                  className="w-full px-5 py-2.5 rounded-lg border border-[#7E53D4] shadow-md text-[#7E53D4] font-semibold text-[16px]"
                  onClick={() => addToCart(product)}
                
                />
                      </div>

                </Link>

  );
}


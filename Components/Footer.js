import Image from 'next/image'
import React from 'react'

import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
     <div className="font-sans tracking-wide bg-[#27282b] py-12 px-16">
            <div className="grid max-md-grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                <Image
                        src="/logo.png"
                        alt="logo"
                        className="w-36"
                        width={144} height={36}
                    />
                    <p className="text-sm mt-6 text-gray-300">Discover the elegance of We5ive dresses, where style meets comfort. Our collection features chic, high-quality dresses perfect for any occasion—whether casual or formal. With a focus on flattering fits and modern designs, We5ive offers timeless fashion that celebrates individuality and confidence. Shop now for your perfect look!</p>

                    
                </div>

                <div>
                    <h4 className="text-gray-100 font-bold text-2xl">Sign Up For Our Newsletter!</h4>
                    <p className="text-sm mt-6 text-gray-300">Get notified about updates and be the first to get early access to new Podcast episodes.</p>

                    <div className="bg-[#F4F8FF] flex rounded-full mt-12 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg">
                        <input type='email' placeholder='Your email address'
                            className="w-full outline-none text-gray-300 text-sm bg-transparent pl-4" />
                        <button type='button'
                            className="bg-[#7E53D4] rounded-tr-lg rounded-br-lg rounded-tl-none rounded-bl-none text-white font-semibold text-sm rounded-full px-5 py-2 ml-4">Subscribe</button>
                    </div>

                   
                </div>
            </div>

            <ul className="grid max-md-grid-cols-1 lg:grid-cols-4 lg:gap-20 gap-2 mt-10">
                        <li className="items-center max-sm:mb-3">
                            <h2 className="text-gray-100">Contact Us</h2>
                            <a href="javascript:void(0)" className="text-gray-100 text-sm flex">
                                
                                <strong>support@example.com</strong>
                            </a>
                        </li>
                        <li className="items-center max-sm:mb-3">
                            <h2 className="text-gray-100">About us</h2>
                            <a href="javascript:void(0)" className="text-gray-100 text-sm flex">
                                
                                <strong>Contact Us</strong>
                            </a>
                        </li>
                        <li className="items-center max-sm:mb-3">
                            <h2 className="text-gray-100">Privacy policy</h2>
                            <a href="javascript:void(0)" className="text-gray-100 text-sm flex">
                                
                                <strong>Terms & Condition</strong>
                            </a>
                        </li>
                        <li className="items-center max-sm:mb-3">
                            <h2 className="text-gray-100 mb-2">Social Link</h2>
                             <ul className="flex items-center  space-x-4">
                                <li className="bg-[#343538] h-5 w-5 rounded-full flex items-center justify-center shrink-0">
                                  <a href="javascript:void(0)">
                                    <FaFacebookF size={15} color="#fff" />
                                  </a>
                                </li>
                                <li className="bg-[#343538] h-5 w-5 rounded-full flex items-center justify-center shrink-0">
                                  <a href="javascript:void(0)">
                                    <FaInstagram size={15} color="#fff" />
                                  </a>
                                </li>
                                <li className="bg-[#343538] h-5 w-5 rounded-full flex items-center justify-center shrink-0">
                                  <a href="javascript:void(0)">
                                    <FaTwitter size={15} color="#fff" />
                                  </a>
                                </li>
                              </ul>
                        </li>

                        
                        
                    </ul>
        </div>
        <div className="w-full bg-[#7E53D4] text-white text-center py-2">© 2024 | We5ive</div>
        </footer>
  );
}
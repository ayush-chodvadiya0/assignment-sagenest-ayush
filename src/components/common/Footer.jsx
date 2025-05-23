'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 md:py-16">
      <div className="container-custom grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        <div className="col-span-1">
          <div className="flex items-center mb-4">
            <Image 
              src="/images/img_icon_white_a700.svg" 
              alt="Nexcent Logo" 
              width={43} 
              height={29} 
              className="w-8 h-6 md:w-[43px] md:h-[29px]"
            />
            <Image 
              src="/images/img_nexcent.svg" 
              alt="Nexcent" 
              width={137} 
              height={25} 
              className="ml-2 w-24 md:w-[137px]"
            />
          </div>
          <p className="text-sm text-gray-100 mb-2">
            Copyright © 2020 Nexcent ltd.
          </p>
          <p className="text-sm text-gray-100 mb-6 md:mb-8">
            All rights reserved
          </p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Social Media" className="hover:opacity-80 transition-opacity">
              <Image 
                src="/images/img_social_icons.svg" 
                alt="Social Media" 
                width={32} 
                height={32} 
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </Link>
            <Link href="#" aria-label="Social Media" className="hover:opacity-80 transition-opacity">
              <Image 
                src="/images/img_social_icons_white_a700.svg" 
                alt="Social Media" 
                width={32} 
                height={32} 
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </Link>
            <Link href="#" aria-label="Social Media" className="hover:opacity-80 transition-opacity">
              <Image 
                src="/images/img_social_icons_white_a700_32x32.svg" 
                alt="Social Media" 
                width={32} 
                height={32} 
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </Link>
            <Link href="#" aria-label="Social Media" className="hover:opacity-80 transition-opacity">
              <Image 
                src="/images/img_social_icons_32x32.svg" 
                alt="Social Media" 
                width={32} 
                height={32} 
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </Link>
          </div>
        </div>
        
        <div className="col-span-1">
          <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-[#ffffff]">Company</h3>
          <ul className="space-y-3 md:space-y-4">
            <li><Link href="#" className="text-sm text-gray-100 hover:text-green-500 transition-colors">About us</Link></li>
            <li><Link href="#" className="text-sm text-gray-100 hover:text-green-500 transition-colors">Blog</Link></li>
            <li><Link href="#" className="text-sm text-gray-100 hover:text-green-500 transition-colors">Contact us</Link></li>
            <li><Link href="#" className="text-sm text-gray-100 hover:text-green-500 transition-colors">Pricing</Link></li>
            <li><Link href="#" className="text-sm text-gray-100 hover:text-green-500 transition-colors">Testimonials</Link></li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-[#ffffff]">Support</h3>
          <ul className="space-y-3 md:space-y-4">
            <li><Link href="#" className="text-sm text-gray-100 hover:text-green-500 transition-colors">Help center</Link></li>
            <li><Link href="#" className="text-sm text-gray-100 hover:text-green-500 transition-colors">Terms of service</Link></li>
            <li><Link href="#" className="text-sm text-gray-100 hover:text-green-500 transition-colors">Legal</Link></li>
            <li><Link href="#" className="text-sm text-gray-100 hover:text-green-500 transition-colors">Privacy policy</Link></li>
            <li><Link href="#" className="text-sm text-gray-100 hover:text-green-500 transition-colors">Status</Link></li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-[#ffffff]">Stay up to date</h3>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full bg-opacity-20 bg-white text-gray-300 rounded-lg py-2 px-4 pr-10 focus:outline-none text-sm md:text-base"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:opacity-80 transition-opacity">
              <Image 
                src="/images/img_essential_icons_send.svg" 
                alt="Send" 
                width={18} 
                height={18} 
                className="w-4 h-4 md:w-[18px] md:h-[18px]"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
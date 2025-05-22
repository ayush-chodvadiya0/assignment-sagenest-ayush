'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="col-span-1">
          <div className="flex items-center mb-4">
            <Image 
              src="/images/img_icon_white_a700.svg" 
              alt="Nexcent Logo" 
              width={43} 
              height={29} 
            />
            <Image 
              src="/images/img_nexcent.svg" 
              alt="Nexcent" 
              width={137} 
              height={25} 
              className="ml-2"
            />
          </div>
          <p className="text-sm text-gray-100 mb-2">
            Copyright © 2020 Nexcent ltd.
          </p>
          <p className="text-sm text-gray-100 mb-8">
            All rights reserved
          </p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Social Media">
              <Image 
                src="/images/img_social_icons.svg" 
                alt="Social Media" 
                width={32} 
                height={32} 
              />
            </Link>
            <Link href="#" aria-label="Social Media">
              <Image 
                src="/images/img_social_icons_white_a700.svg" 
                alt="Social Media" 
                width={32} 
                height={32} 
              />
            </Link>
            <Link href="#" aria-label="Social Media">
              <Image 
                src="/images/img_social_icons_white_a700_32x32.svg" 
                alt="Social Media" 
                width={32} 
                height={32} 
              />
            </Link>
            <Link href="#" aria-label="Social Media">
              <Image 
                src="/images/img_social_icons_32x32.svg" 
                alt="Social Media" 
                width={32} 
                height={32} 
              />
            </Link>
          </div>
        </div>
        
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-6 text-[#ffffff]">Company</h3>
          <ul className="space-y-4">
            <li><Link href="#" className="text-sm text-gray-100 hover:text-green-500">About us</Link></li>
            <li><Link href="#" className="text-sm text-gray-100 hover:text-green-500">Blog</Link></li>
            <li><Link href="#" className="text-sm text-gray-100 hover:text-green-500">Contact us</Link></li>
            <li><Link href="#" className="text-sm text-gray-100 hover:text-green-500">Pricing</Link></li>
            <li><Link href="#" className="text-sm text-gray-100 hover:text-green-500">Testimonials</Link></li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-6 text-[#ffffff]">Support</h3>
          <ul className="space-y-4">
            <li><Link href="#" className="text-sm text-gray-100 hover:text-green-500">Help center</Link></li>
            <li><Link href="#" className="text-sm text-gray-100 hover:text-green-500">Terms of service</Link></li>
            <li><Link href="#" className="text-sm text-gray-100 hover:text-green-500">Legal</Link></li>
            <li><Link href="#" className="text-sm text-gray-100 hover:text-green-500">Privacy policy</Link></li>
            <li><Link href="#" className="text-sm text-gray-100 hover:text-green-500">Status</Link></li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-6 text-[#ffffff]">Stay up to date</h3>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full bg-opacity-20 bg-white text-gray-300 rounded-lg py-2 px-4 pr-10 focus:outline-none"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <Image 
                src="/images/img_essential_icons_send.svg" 
                alt="Send" 
                width={18} 
                height={18} 
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
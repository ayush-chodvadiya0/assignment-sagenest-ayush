'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const Header = () => {
  return (
    <header className="bg-gray-100 py-4">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/img_icon_blue_gray_900.svg" 
              alt="Nexcent Logo" 
              width={35} 
              height={24} 
            />
            <Image 
              src="/images/img_nexcent_blue_gray_900.svg" 
              alt="Nexcent" 
              width={111} 
              height={20} 
              className="ml-2"
            />
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-10">
          <Link href="/" className="text-gray-900 font-medium text-base">
            Home
          </Link>
          <Link href="#" className="text-gray-900 text-base">
            Service
          </Link>
          <Link href="#" className="text-gray-900 text-base">
            Feature
          </Link>
          <Link href="#" className="text-gray-900 text-base">
            Product
          </Link>
          <Link href="#" className="text-gray-900 text-base">
            Testimonial
          </Link>
          <Link href="#" className="text-gray-900 text-base">
            FAQ
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button 
            variant="text" 
            size="small" 
            className="text-green-500 bg-transparent"
          >
            Login
          </Button>
          <Button 
            variant="primary" 
            size="small"
          >
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
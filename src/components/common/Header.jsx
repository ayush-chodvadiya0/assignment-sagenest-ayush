'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-gray-100 py-4 sticky top-0 z-50">
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
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6 text-gray-700" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link href="/" className="text-gray-900 font-medium text-base hover:text-green-500 transition-colors">
            Home
          </Link>
          <Link href="#" className="text-gray-900 text-base hover:text-green-500 transition-colors">
            Service
          </Link>
          <Link href="#" className="text-gray-900 text-base hover:text-green-500 transition-colors">
            Feature
          </Link>
          <Link href="#" className="text-gray-900 text-base hover:text-green-500 transition-colors">
            Product
          </Link>
          <Link href="#" className="text-gray-900 text-base hover:text-green-500 transition-colors">
            Testimonial
          </Link>
          <Link href="#" className="text-gray-900 text-base hover:text-green-500 transition-colors">
            FAQ
          </Link>
        </nav>
        
        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="text" 
            size="small" 
            className="text-green-500 bg-transparent"
          >
            <p className='text-green-500'>Login</p>
          </Button>
          <Button 
            variant="primary" 
            size="small"
          >
            Sign up
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container-custom py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-900 font-medium text-base hover:text-green-500 transition-colors">
                Home
              </Link>
              <Link href="#" className="text-gray-900 text-base hover:text-green-500 transition-colors">
                Service
              </Link>
              <Link href="#" className="text-gray-900 text-base hover:text-green-500 transition-colors">
                Feature
              </Link>
              <Link href="#" className="text-gray-900 text-base hover:text-green-500 transition-colors">
                Product
              </Link>
              <Link href="#" className="text-gray-900 text-base hover:text-green-500 transition-colors">
                Testimonial
              </Link>
              <Link href="#" className="text-gray-900 text-base hover:text-green-500 transition-colors">
                FAQ
              </Link>
            </nav>
            <div className="flex flex-col space-y-4 pt-4 border-t border-gray-200">
              <Button 
                variant="text" 
                size="small" 
                className="text-green-500 bg-transparent w-full justify-center"
              >
                <p className='text-green-500'>Login</p>
              </Button>
              <Button 
                variant="primary" 
                size="small"
                className="w-full justify-center"
              >
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
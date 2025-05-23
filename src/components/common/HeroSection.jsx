'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Pagination from '@/components/ui/Pagination';

const HeroSection = () => {
  return (
    <section className="bg-gray-100 pt-12 md:pt-20 pb-12 md:pb-16">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-700 leading-tight mb-4">
            Lessons and insights <span className="text-green-500">from 8 years</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-xl mx-auto md:mx-0">
            Where to grow your business as a photographer: site or social media?
          </p>
          <Button variant="primary" size="medium" className="mb-8 w-full md:w-auto">
            Register
          </Button>
          <div className="mt-4">
            <Pagination currentPage={1} totalPages={3} onPageChange={() => {}} />
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <Image 
            src="/images/img_illustration.svg" 
            alt="Business Illustration" 
            width={391} 
            height={407} 
            priority
            className="w-full max-w-[280px] md:max-w-none"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
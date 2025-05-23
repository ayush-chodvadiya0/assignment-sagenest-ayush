'use client';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/common/HeroSection';
import Card from '@/components/common/Card';
import Button from '@/components/ui/Button';
export default function Home() {
  return (
    <main>
      <Header />
      {/* Hero Section */}
      <HeroSection />
      {/* Clients Section */}
      <section className="py-8 md:py-12">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 text-center mb-3 md:mb-4">
            Our Clients
          </h2>
          <p className="text-sm md:text-base text-gray-600 text-center mb-6 md:mb-8">
            We have been working with some Fortune 500+ clients
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16">
            <Image src="/images/img_logo.svg" alt="Client Logo" width={48} height={48} className="w-8 h-8 md:w-12 md:h-12" />
            <Image src="/images/img_logo_blue_gray_800_01.svg" alt="Client Logo" width={48} height={48} className="w-8 h-8 md:w-12 md:h-12" />
            <Image src="/images/img_logo_black_900.svg" alt="Client Logo" width={48} height={48} className="w-8 h-8 md:w-12 md:h-12" />
            <Image src="/images/img_logo_indigo_800.svg" alt="Client Logo" width={48} height={48} className="w-8 h-8 md:w-12 md:h-12" />
            <Image src="/images/img_logo_gray_900_01.svg" alt="Client Logo" width={48} height={48} className="w-8 h-8 md:w-12 md:h-12" />
            <Image src="/images/img_logo_blue_gray_800_02.svg" alt="Client Logo" width={48} height={48} className="w-8 h-8 md:w-12 md:h-12" />
            <Image src="/images/img_logo_black_900.svg" alt="Client Logo" width={48} height={48} className="w-8 h-8 md:w-12 md:h-12" />
          </div>
        </div>
      </section>
      {/* Community Management Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 text-center mb-3 md:mb-4">
            Manage your entire community in a single system
          </h2>
          <p className="text-sm md:text-base text-gray-600 text-center mb-8 md:mb-12">
            Who is Nextcent suitable for?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card
              icon="/images/img_icon.svg"
              title="Membership Organisations"
              titleClassName="text-xl md:text-2xl mt-4 mb-4"
              description="Our membership management software provides full automation of membership renewals and payments"
              descriptionClassName="text-sm px-4 md:px-6"
              className="p-4 md:p-6"
            />
            <Card
              icon="/images/img_icon_green_50.svg"
              title="National Associations"
              titleClassName="text-xl md:text-2xl mt-4 mb-4"
              description="Our membership management software provides full automation of membership renewals and payments"
              descriptionClassName="text-sm px-4 md:px-6"
              className="p-4 md:p-6"
            />
            <Card
              icon="/images/img_icon_green_50_56x65.svg"
              title="Clubs And Groups"
              titleClassName="text-xl md:text-2xl mt-4 mb-4"
              description="Our membership management software provides full automation of membership renewals and payments"
              descriptionClassName="text-sm px-4 md:px-6"
              className="p-4 md:p-6"
            />
          </div>
        </div>
      </section>
      {/* Pixelgrade Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center">
            <Image 
              src="/images/img_frame_35.svg" 
              alt="Pixelgrade Illustration" 
              width={442} 
              height={433}
              className="w-full max-w-[280px] md:max-w-none"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4 md:mb-6">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
            </p>
            <Button variant="primary" className="w-full md:w-auto">
              Learn More
            </Button>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="bg-gray-100 py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-3 md:mb-4">
                Helping a local <span className="text-green-500">business reinvent itself</span>
              </h2>
              <p className="text-sm md:text-base text-gray-900 mb-6 md:mb-8">
                We reached here with our hard work and dedication
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              <div className="flex items-start gap-3 md:gap-4">
                <Image 
                  src="/images/img_icon_green_500.svg" 
                  alt="Members Icon" 
                  width={48} 
                  height={48}
                  className="w-8 h-8 md:w-12 md:h-12"
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-700">2,245,341</h3>
                  <p className="text-sm md:text-base text-gray-600">Members</p>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <Image 
                  src="/images/img_icon_green_500_48x48.svg" 
                  alt="Clubs Icon" 
                  width={48} 
                  height={48}
                  className="w-8 h-8 md:w-12 md:h-12"
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-700">46,328</h3>
                  <p className="text-sm md:text-base text-gray-600">Clubs</p>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <Image 
                  src="/images/img_icon_48x48.svg" 
                  alt="Event Bookings Icon" 
                  width={48} 
                  height={48}
                  className="w-8 h-8 md:w-12 md:h-12"
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-700">828,867</h3>
                  <p className="text-sm md:text-base text-gray-600">Event Bookings</p>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <Image 
                  src="/images/img_icon_1.svg" 
                  alt="Payments Icon" 
                  width={48} 
                  height={48}
                  className="w-8 h-8 md:w-12 md:h-12"
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-700">1,926,436</h3>
                  <p className="text-sm md:text-base text-gray-600">Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Site Footer Design Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="flex justify-center">
              <Image 
                src="/images/img_plant.svg" 
                alt="Mobile App" 
                width={320} 
                height={400}
                className="w-full max-w-[180px] md:max-w-[240px]"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4 md:mb-6">
              How to design your site footer like we did
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
            </p>
            <Button variant="primary" className="w-full md:w-auto">
              Learn More
            </Button>
          </div>
        </div>
      </section>
      {/* Testimonial Section */}
      <section className="bg-gray-100 py-8 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex justify-center">
              <div className="relative w-full max-w-[280px] md:max-w-[326px] aspect-square">
                <Image 
                  src="/images/img_image_9.png" 
                  alt="Testimonial" 
                  fill
                  className="rounded-lg object-cover"
                  sizes="(max-width: 768px) 280px, 326px"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-sm md:text-base text-gray-600 mb-6">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
              </p>
              <h3 className="text-base md:text-lg font-semibold text-green-500 mb-2">Tim Smith</h3>
              <p className="text-sm md:text-base text-blue-gray-800 mb-6">British Dragon Boat Racing Association</p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="bg-green-50 p-2 rounded-lg">
                  <div className="relative w-6 h-6 md:w-10 md:h-10">
                    <Image 
                      src="/images/img_vector_deep_purple_a700.svg" 
                      alt="Logo" 
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 24px, 40px"
                    />
                  </div>
                </div>
                <div className="bg-gray-100 p-2 rounded-lg">
                  <div className="relative w-6 h-5 md:w-10 md:h-7">
                    <Image 
                      src="/images/img_logo_blue_gray_800_01.svg" 
                      alt="Logo" 
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 24px, 40px"
                    />
                  </div>
                </div>
                <div className="relative w-6 h-6 md:w-12 md:h-12">
                  <Image 
                    src="/images/img_logo_gray_100.svg" 
                    alt="Logo" 
                    fill
                    className="rounded-lg object-contain"
                    sizes="(max-width: 768px) 24px, 48px"
                  />
                </div>
                <div className="relative w-6 h-6 md:w-12 md:h-12">
                  <Image 
                    src="/images/img_logo_gray_100_48x48.svg" 
                    alt="Logo" 
                    fill
                    className="rounded-lg object-contain"
                    sizes="(max-width: 768px) 24px, 48px"
                  />
                </div>
                <div className="relative w-6 h-6 md:w-12 md:h-12">
                  <Image 
                    src="/images/img_logo_48x48.svg" 
                    alt="Logo" 
                    fill
                    className="rounded-lg object-contain"
                    sizes="(max-width: 768px) 24px, 48px"
                  />
                </div>
                <div className="relative w-6 h-6 md:w-12 md:h-12">
                  <Image 
                    src="/images/img_logo_1.svg" 
                    alt="Logo" 
                    fill
                    className="rounded-lg object-contain"
                    sizes="(max-width: 768px) 24px, 48px"
                  />
                </div>
                <div className="flex items-center mt-4 md:mt-0">
                  <span className="text-sm md:text-base font-semibold text-green-500 mr-2">Meet all customers</span>
                  <div className="relative w-4 h-4 md:w-6 md:h-6">
                    <Image 
                      src="/images/img_24_arrows_directions_right.svg" 
                      alt="Arrow Right" 
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 16px, 24px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 text-center mb-3 md:mb-4">
            Caring is the new marketing
          </h2>
          <p className="text-sm md:text-base text-gray-600 text-center max-w-2xl mx-auto mb-8 md:mb-12">
            The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="relative">
              <Image 
                src="/images/img_image_18.png" 
                alt="Blog Post" 
                width={368} 
                height={286} 
                className="rounded-lg w-full"
              />
              <div className="bg-gray-100 rounded-lg shadow-sm p-4 md:p-6 mx-4 md:mx-6 -mt-16 md:-mt-20 relative z-10">
                <h3 className="text-lg md:text-xl font-semibold text-gray-600 text-center mb-4 md:mb-6">
                  Creating Streamlined Safeguarding Processes with OneRen
                </h3>
                <div className="flex items-center justify-center">
                  <span className="text-base md:text-xl font-semibold text-green-500 mr-2">Readmore</span>
                  <Image 
                    src="/images/img_24_arrows_directions_right.svg" 
                    alt="Arrow Right" 
                    width={24} 
                    height={24}
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </div>
              </div>
            </div>
            <div className="relative">
              <Image 
                src="/images/img_image_19.png" 
                alt="Blog Post" 
                width={368} 
                height={286} 
                className="rounded-lg w-full"
              />
              <div className="bg-gray-100 rounded-lg shadow-sm p-4 md:p-6 mx-4 md:mx-6 -mt-16 md:-mt-20 relative z-10">
                <h3 className="text-lg md:text-xl font-semibold text-gray-600 text-center mb-4 md:mb-6">
                  What are your safeguarding responsibilities and how can you manage them?
                </h3>
                <div className="flex items-center justify-center">
                  <span className="text-base md:text-xl font-semibold text-green-500 mr-2">Readmore</span>
                  <Image 
                    src="/images/img_24_arrows_directions_right.svg" 
                    alt="Arrow Right" 
                    width={24} 
                    height={24}
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </div>
              </div>
            </div>
            <div className="relative">
              <Image 
                src="/images/img_image_20.png" 
                alt="Blog Post" 
                width={368} 
                height={286} 
                className="rounded-lg w-full"
              />
              <div className="bg-gray-100 rounded-lg shadow-sm p-4 md:p-6 mx-4 md:mx-6 -mt-16 md:-mt-20 relative z-10">
                <h3 className="text-lg md:text-xl font-semibold text-gray-600 text-center mb-4 md:mb-6">
                  Revamping the Membership Model with Triathlon Australia
                </h3>
                <div className="flex items-center justify-center">
                  <span className="text-base md:text-xl font-semibold text-green-500 mr-2">Readmore</span>
                  <Image 
                    src="/images/img_24_arrows_directions_right.svg" 
                    alt="Arrow Right" 
                    width={24} 
                    height={24}
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-gray-100 py-12 md:py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-8 md:mb-12 max-w-4xl mx-auto">
            Pellentesque suscipit fringilla libero eu.
          </h2>
          <Button 
            variant="primary" 
            size="medium" 
            className="px-6 md:px-8 w-full md:w-auto"
            icon={
              <Image 
                src="/images/img_16_arrows_directions_right.svg" 
                alt="Arrow Right" 
                width={16} 
                height={16}
                className="w-4 h-4 md:w-4 md:h-4"
              />
            }
          >
            Get a Demo
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
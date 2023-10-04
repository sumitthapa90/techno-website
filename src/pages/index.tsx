import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Suspense } from 'react';

const Portfolio = dynamic(() => import('../components/home/Protfolio/Portfolio'), {
  ssr: false
});
const HeroSection = dynamic(() => import('@/components/home/HeroSection/HeroSection'), {
  ssr: false
});
const About = dynamic(() => import('@/components/home/AboutSection/About'), {
  ssr: false
});
const Service = dynamic(() => import('@/components/home/ServiceSection/Service'), {
  ssr: false
});
const FeatureSection = dynamic(() => import('@/components/home/FeaturesSection/FeatureSection'), {
  ssr: false
});
const IndustriesSection = dynamic(
  () => import('@/components/home/IndustriesSection/IndustriesSection'),
  {
    ssr: false
  }
);
const Testimonial = dynamic(() => import('@/components/home/Testimonial/Testimonial'), {
  ssr: false
});
const Experts = dynamic(() => import('@/components/home/Experts/Experts'), {
  ssr: false
});
const Contact = dynamic(() => import('../components/home/ContactUs/Contact'), {
  ssr: false
});
const Footer = dynamic(() => import('../components/includes/Footer/Footer'), {
  ssr: false
});

function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
      </Head>
      <Suspense>
        <HeroSection />
      </Suspense>
      <About />
      <Service />
      <FeatureSection />
      <Portfolio />
   
      <Testimonial />
      <Experts />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;

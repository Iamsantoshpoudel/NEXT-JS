"use client";
import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import Collaboration from '@/components/Collaboration'
import Services from '@/components/Services'
import Footer from '@/components/Footer'
import ButtonGradient from '@/assets/svg/ButtonGradient'
const page = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  )
};
export default page

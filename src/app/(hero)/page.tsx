import React from 'react'
import Image from 'next/image'
import homeSrc from '/public/home.jpg'
import Hero from '@/components/hero'
import Header from '@/components/header'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
}

export default function Page() {
  return (
    <>
      <Header />
      <Hero imgUrl={homeSrc} altTxt='Home' content='Welcome to our website'/>
    </>
  )
}

import MainHero from '@/components/MainHero'
import OurPhilosophy from '@/components/sections/our-philosophy'
import Services from '@/components/sections/services'
import React from 'react'
import Works from '@/components/sections/works'
import Products from '@/components/sections/products'
import OurClients from '@/components/sections/our-clients'

export default async function HomePage() {
  return (
    <div className="w-full h-full">
      <MainHero />
      <OurPhilosophy />
      <Services />
      <Works />
      <Products />
      <OurClients />
    </div>
  )
}

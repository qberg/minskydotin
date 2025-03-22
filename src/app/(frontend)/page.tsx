import MainHero from '@/components/MainHero'
import OurPhilosophy from '@/components/sections/our-philosophy'
import Services from '@/components/sections/services'
import React from 'react'
import Works from '@/components/sections/works'

export default async function HomePage() {
  return (
    <div className="w-full h-full">
      <MainHero />
      <OurPhilosophy />
      <Services />
      <Works />
    </div>
  )
}

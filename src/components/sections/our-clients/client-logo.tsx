import Image from 'next/image'

interface ClientLogo {
  src: string
  alt: string
}

const clientLogos: ClientLogo[] = [
  { src: '/tn-govt.svg', alt: 'TamilNadu Government' },
  { src: '/fametn.svg', alt: 'FAME TN' },
  { src: '/coord.svg', alt: 'Coord' },
  { src: '/startuptn.svg', alt: 'Startup TN' },
  { src: '/neumex.svg', alt: 'Neumex' },
]

const ClientLogos = () => {
  return (
    <div className="flex">
      {clientLogos.map((client, index) => (
        <div key={index} className="relative">
          <Image src={client.src} alt={client.alt} fill className="object-contain" />
        </div>
      ))}
    </div>
  )
}

export default ClientLogos

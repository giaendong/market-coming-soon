import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className='flex flex-col p-10 bg-white rounded-lg justify-center items-center gap-10'>
        <Image src={'/nusameta-market.webp'} alt={''} width={400} height={100}/>
        <div className='flex flex-col'>
          <h1 className='font-extrabold text-[100px] uppercase py-0'>Coming Soon</h1>
        </div>
      </div>
    </main>
  )
}

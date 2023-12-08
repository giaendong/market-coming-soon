import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className='flex flex-col p-10 bg-white rounded-lg justify-center items-center gap-10'>
        <Image src={'/nusameta-market.webp'} alt={''} width={400} height={100}/>
        <div className='flex flex-col'>
          <h1 className='font-extrabold text-[100px] uppercase py-0'>Coming Soon</h1>
          <h2 className='text-[24px] text-red-500 -mt-10 ml-2'>Drop By Again Soon!</h2>
        </div>
      </div>
    </main>
  )
}

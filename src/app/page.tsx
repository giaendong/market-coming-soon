"use client"
import useSendMail from '@/services/email/mutations/SendMail.mutation';
import { validateEmail } from '@/utils/Common.utils';
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react';

const textArrays: string[][] = [
  ["C", "O", "L", "L", "A", "B", "O", "R", "A", "T", "I", "O", "N"],
  ["O", "W", "N", "E", "R", "S", "H", "I", "P"],
  ["D", "I", "G", "I", "T", "A", "L", " ", "C", "R", "E", "A", "T", "I", "V", "I", "T", "Y"],
];

export default function Home() {
  const [currentArrayIndex, setCurrentArrayIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const sendMail = useSendMail({
    onSuccess: (res) => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('')
    },
    onError: (err) => {
      setIsSubmitting(false);
      setErrMessage(err.message);
      console.log(err);
    }
  })

  const submit = useCallback(() => {
    setIsSubmitting(true)
    sendMail.mutate({email})
  },[email, sendMail])

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isTyping) {
        // Check if the word is fully typed, then switch to deleting
        if (currentTextIndex === textArrays[currentArrayIndex].length) {
          setIsTyping(false);
        } else {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % (textArrays[currentArrayIndex].length + 1));
        }
      } else {
        // Check if the word is fully deleted, then move to the next word
        if (currentTextIndex === 0) {
          setIsTyping(true);
          // Move to the next text array (looping back to the first array if needed)
          setCurrentArrayIndex((prevArrayIndex) => (prevArrayIndex + 1) % textArrays.length);
        } else {
          setCurrentTextIndex((prevIndex) => prevIndex - 1);
        }
      }
    }, 200); // Adjust the typing speed (e.g., 200 milliseconds)

    // Stop updating after 250 seconds (adjust as needed)
    setTimeout(() => {
      clearInterval(intervalId);
    }, 250000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentArrayIndex, isTyping, currentTextIndex]);

  const currentText = textArrays[currentArrayIndex].slice(0, currentTextIndex).join('');
  return (
    <main className="lg:fixed w-screen lg:h-screen items-center justify-center pb-10">
      <Image src={'/images/background.png'} alt={''} layout='fill' className='hidden lg:block'/>
      <div className='relative flex flex-col lg:flex-row w-screen h-screen p-10 items-center justify-center'>
        {
          showModal ?
            <div className='lg:basis-3/5 flex flex-col text-white gap-5'>
              <button
                className='w-10 h-10 rounded-full border border-white items-center justify-center flex text-[20px] cursor-pointer'
                onClick={() => setShowModal(false)}
              >
                X
              </button>
              <h2 className='lg:text-[24px] text-[20px] font-bold tracking-widest'>DON&apos;T MISS OUT</h2>
              <h1 className='lg:text-[48px] text-[24px] font-bold tracking-widest'>WE ARE ALMOST HERE</h1>
              <p className=''>
                Subscribe to our newsletter and we will send you<br />a notification about the launch of our brand new site.
              </p>
              <div className='lg:w-2/3 flex flex-col'>
                <input
                  type='email'
                  placeholder='Email Address'
                  className='w-full bg-transparent border-b-2 border-solid border-neutral-100 mt-10 outline-none'
                  onChange={(e) => [setEmail(e.target.value), setIsSuccess(false)]}
                />
                <div className='self-end lg:text-[12px] text-[10px] font-extralight text-neutral-300'>
                  {
                    errMessage ?
                      <span className='text-red-500'>{errMessage}</span> :
                      "*Required field"
                  }
                </div>
              </div>
              <div>
                <button
                  className='mt-10 bg-gradient-to-r from-cyan-950 to-cyan-500 px-5 py-3 rounded-full border border-white tracking-widest cursor-pointer disabled:cursor-not-allowed'
                  onClick={submit}
                  disabled={isSubmitting || email === '' || !validateEmail(email) || isSuccess}
                >
                  {isSuccess ? 'Successfully Subscribed!' : isSubmitting ? 'Sending...' : 'SEND'}
                </button>
              </div>
            </div>
            :
            <div className='lg:basis-3/5 flex flex-col text-white'>
              <Image src={'/images/logo.png'} alt={''} width={667} height={375} className='lg:-ml-10 lg:-mt-32'/>
              <div className='lg:-mt-10'>
                <h1 className='lg:text-[48px] text-[24px] font-bold tracking-widest'>ELEVATE YOUR</h1>
                <h1 className='lg:text-[48px] text-[24px] font-bold tracking-widest'>DIGITAL EXPERIENCE</h1>
                <h1 className='lg:text-[48px] text-[24px] font-bold tracking-widest'>WHERE <span className='text-cyan-300'>{currentText}</span></h1>
                <h1 className='lg:text-[48px] text-[24px] font-bold tracking-widest'>CONVERGE FOR THE NEXT ERA</h1>
                <p className=''>
                  We are preparing something amazing and exciting for you. <br />
                  Special surprise for our subscribers only.
                </p>
                <button
                  className='mt-10 bg-gradient-to-r from-cyan-950 to-cyan-500 px-5 py-3 rounded-full border border-white tracking-widest cursor-pointer'
                  onClick={() => setShowModal(true)}
                >
                  NOTIFY ME
                </button>
              </div>
            </div>
        }
        <div className='lg:basis-2/5 flex flex-col items-center justify-center order-first lg:order-last mb-1'>
          <video className="lg:w-full h-auto object-cover rounded-lg" autoPlay muted loop>
            <source src="/videos/nusavideo.mp4" />
          </video>
        </div>
      </div>
    </main>
  )
}

"use client"
import useSendMail from '@/services/email/mutations/SendMail.mutation';
import { validateEmail } from '@/utils/Common.utils';
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react';


export default function Connect(): JSX.Element {
    useEffect(() => {
        const str: string = "JOIN NOW JOIN NOW JOIN NOW JOIN NOW";
        const textElement = document.getElementById("text");

        if (textElement) {
            for (let i = 0; i < str.length; i++) {
                const span = document.createElement('span');
                span.innerHTML = str[i];
                textElement.appendChild(span);
                span.style.transform = `rotate(${11 * i}deg)`;
            }
        }
    }, []); // Empty dependency array ensures useEffect runs only once after initial render


    return (
        <main>
            <section className="w-screen h-screen relative bg-[url('/images/bgCconnect.png')] ">
                <div className="flex flex-col justify-center text-center items-center">
                    <img className="relative" src={'/images/logo.png'} alt={'Logo Connect'}
                         width={600} height={300}/>
                    <p className='lg:text-[24px] text-[20px]'>
                        Forge Creative Partnerships in Web 3.0 with
                    </p>
                    <h1 className='lg:text-[60px] text-[2.5rem] font-bold tracking-widest z-10'>
                        CREATOR CONN3CT
                    </h1>
                    <p className="" id="text"></p>
                    <button role="button"
                            className="flex items-center justify-center z-10 w-[64px] h-[64px] rounded-full"
                            style={{
                                backgroundImage: "linear-gradient(to bottom, #1c90ff, #0085ff, #0078ff, #006bff, " +
                                    "#005dff, #0067ff, #0070ff, #0079ff, #0095ff, #00adff, #00c3ff, #1fd6fc)",
                                boxShadow: "8px 12px 25px rgba(15, 30, 80, 0.7), inset -3px -3px 8px rgba(24, 43, 113, 0.32), inset 2px 4px 8px rgba(255, 255, 255, 0.4)"
                            }}>
                        <img className="w-[40px] md:w-[54px] lg:w-[64px]" src={'/images/NusmetLogo.png'}
                             alt={'Logo Connect'}/>
                    </button>
                    <div className="w-full h-full">
                        <img src={'/Rectangle.svg'} alt={'Rectangle Connect'}
                             className="object-cover md:object-contain h-full w-full absolute bottom-0"/>
                    </div>

                </div>
                <div className="css-selector"></div>


            </section>

        </main>
    )
}

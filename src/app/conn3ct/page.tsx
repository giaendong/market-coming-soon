"use client"

import Image from "next/image";
import CircularBttn from "@/components/CircularBttn";

export default function Connect(): JSX.Element {
    const joinTheProgram: string[] =[
        'Visit nusamarket.io/ conn3ct',
        'Input Information',
        'Profile Submission',
        'Read Agreement and Submit',
        'Review Document',
        'Confirmation via email'
    ]


    return (
        <main>
            <section className="w-screen h-screen relative bg-[url('/images/bgCconnect.png')] ">
                {/*<div className="css-selector"></div>*/}
                <div className="flex flex-col justify-center text-center items-center">
                    <img className="relative" src={'/images/logo.png'} alt={'Logo Connect'}
                         width={600} height={300}/>
                    <p className='lg:text-[24px] text-[20px]'>
                        Forge Creative Partnerships in Web 3.0 with
                    </p>
                    <h1 className='lg:text-[60px] text-[2.5rem] font-bold tracking-widest z-10'>
                        CREATOR CONN3CT
                    </h1>
                    <CircularBttn outterClass={"mt-5 md:mt-10 lg:mt-24"} />

                    <div className="w-full h-full">
                        <img src={'/Rectangle.svg'} alt={'Rectangle Connect'}
                             className="object-cover md:object-contain h-full w-full absolute bottom-0"/>
                    </div>
                </div>
            </section>
            <section className="w-screen h-screen relative bg-[#000F22]">
                <div className="container mx-auto px-4 md:px-0">
                    <div className="flex flex-row lg:pt-10">
                        <p className="leading-[24px] text-[14px] font-normal text-white mr-3">
                            <small>
                                01
                            </small>
                        </p>
                        <p className="leading-[40px] text-[20px] lg:text-[36px] text-white font-bold">
                            &nbsp;About Program
                        </p>
                    </div>
                    <div className="flex-col lg:flex-row grid lg:grid-cols-2 lg:gap-5">
                         <div>
                             <Image className="mt-12 w-full h-auto" src={"/images/Section-1.png"} alt={'Welcome Creators'} width={500}
                                    height={500}/>
                         </div>
                        <div className="content-center">
                            <h2 className='lg:text-[50px] text-[2rem] font-bold tracking-widest mt-5'>
                                Welcome Creators
                            </h2>
                            <p className='lg:text-[16px] text-[14px] font-sans font-normal mt-2'>
                                Explore CREATOR CONN3CT by Nusa Market, where artists and brands reshape the digital
                                world.
                                Join us to collaborate with visionary partners, empowering creativity in virtual realms.
                                Embrace the future of digital expression today.
                            </p>
                        </div>

                    </div>

                </div>
                <div className="border-solid border-[1px] w-full border-[#13315c] absolute bottom-0"></div>
            </section>
            <section className="w-screen h-screen relative bg-[#000F22]">
                <div className="container mx-auto px-4 md:px-0">
                    <div className="flex flex-row">
                        <p className="leading-[24px] text-[14px] font-normal text-white mr-3">
                            <small>
                                02
                            </small>
                        </p>
                        <p className="leading-[40px] text-[20px] lg:text-[36px] text-white font-bold">
                            &nbsp;Benefits
                        </p>
                    </div>
                    <div className="flex-col lg:flex-row grid lg:grid-cols-2 lg:gap-5">
                        <div>
                            <Image className="mt-12 w-full h-auto" src={"/images/Section-2.png"} alt={'Benefits'} width={500}
                                   height={500}/>
                        </div>
                        <div className="content-center">
                            <p className='not-italic font-semibold lg:text-[24px] md:text-[20px] text-[1rem] leading-8
                            flex items-center text-white flex-none order-none self-stretch grow-0'>
                                Whether you&apos;re an artist or
                                a brand, CREATOR CONN3CT offers benefits and opportunities for your next project, from
                                monetization and exposure.
                            </p>


                            <div className="grid grid-cols-2 grid-rows-2 gap-3">
                                <div className="not-italic font-semibold text-lg leading-7 flex items-center text-[#D0D0D0]
                        flex-none order-none grow-0">
                                    For Creator
                                </div>
                                <div>
                                    <ul className="list-disc not-italic font-normal text-xs leading-4 items-center text-[#D0D0D0]
                            order-1 grows">
                                        <li>Monetization Opportunities</li>
                                        <li>Exposure and Visibility</li>
                                        <li>Networking and Industry Connections</li>
                                    </ul>
                                </div>
                                <div className="not-italic font-semibold text-lg leading-7 flex items-center text-[#D0D0D0]
                                flex-none order-none grow-0">
                                    For Brand
                                </div>
                                <div>
                                    <ul className="list-disc not-italic font-normal text-xs leading-4 items-center text-[#D0D0D0]
                                    order-1 grows">
                                        <li>Access to Unique Artistic Talent</li>
                                        <li>Authenticity and Originality</li>
                                        <li>Enhanced Brand Image</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-solid border-[1px] w-full border-[#13315c] absolute bottom-0"></div>
            </section>
            <section className="w-screen h-screen relative bg-[#000F22]">
                <div className="container mx-auto px-4 md:px-0">
                    <div className="flex flex-row">
                        <p className="leading-[24px] text-[14px] font-normal text-white mr-3">
                            <small>
                                03
                            </small>
                        </p>
                        <p className="leading-[40px] text-[20px] lg:text-[36px] text-white font-bold">
                            &nbsp;Join the Program
                        </p>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-3 lg:gap-5 lg:mt-12">
                        {
                            joinTheProgram.map((text: string, index: number) => {
                                return (
                                    <div key={index} className="flex flex-col rounded-[24px] md:min-h-[220px] h-auto
                                    w-full [bg-[#000f22] shadow-[16px_8px_36px_#000000,-6px_-7px_32px_rgba(49,101,247,0.16)]
                                    p-[1.7rem] flex-wrap">
                                        <div className="not-italic font-medium text-2xl leading-8 text-[#2361FE]
                                        order-none grow-0 md:inset-x-1/4 md:inset-y-auto">
                                            {index + 1}.
                                        </div>
                                        <div className="not-italic font-semibold text-base leading-6 flex items-center
                                    text-white flex-none order-1 self-stretch grow-0">
                                            {text}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <section className="w-screen h-full relative bg-[#000F22] pb-64">
                <div className="container mx-auto px-4 md:px-0">
                    <h2 className='lg:text-[50px] text-[2rem] font-bold tracking-widest text-center'>
                        Watch
                    </h2>
                    <p className="not-italic font-normal text-lg leading-7 text-centaer text-[#D0D0D0] text-center">
                        Our latest post
                    </p>
                    <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-3">
                        <div className={"mt-24 md:mt-0"}>
                            <iframe
                                src="https://www.youtube.com/embed/fE2EpZezsQs?si=oCH4HM3VO2vk79rH"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                                style={{
                                    overflow: 'hidden',
                                    overflowX: 'hidden',
                                    overflowY: 'hidden',
                                    height: '100%',
                                    width: '100%',
                                    border: '1px solid #13315C',
                                    filter: 'drop-shadow(16px 8px 36px #000000) drop-shadow(-6px -7px 32px rgba(49, 101, 247, 0.24))',
                                    borderRadius: '24px',

                                }}

                            ></iframe>
                            <p className={"mt-2 not-italic font-semibold text-lg leading-7 flex items-center text-white"}>
                                Getting started with Nusameta: Explore Nusameta&lsquo;s Journey
                                into the Metaverse
                            </p>
                        </div>
                        <div className={"mt-24 md:mt-0"}>
                            <iframe
                                src="https://www.youtube.com/embed/LCKHLlBBS8w?si=GckXsnCNHtj6IgO5"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                                style={{
                                    overflow: 'hidden',
                                    overflowX: 'hidden',
                                    overflowY: 'hidden',
                                    height: '100%',
                                    width: '100%',
                                    border: '1px solid #13315C',
                                    filter: 'drop-shadow(16px 8px 36px #000000) drop-shadow(-6px -7px 32px rgba(49, 101, 247, 0.24))',
                                    borderRadius: '24px',
                                }}
                            ></iframe>
                            <p className={"mt-2 not-italic font-semibold text-lg leading-7 flex items-center text-white"}>
                                Virtual Economic in Nusamarket: Revealing the Future
                            </p>
                        </div>
                        <div className={"mt-24 md:mt-0"}>
                            <iframe
                                src="https://www.youtube.com/embed/32tZK-tmmUc?si=yd9-ej8JqMhEj8z8"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                                    picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                                style={{
                                    overflow: 'hidden',
                                    overflowX: 'hidden',
                                    overflowY: 'hidden',
                                    height: '100%',
                                    width: '100%',
                                    border: '1px solid #13315C',
                                    filter: 'drop-shadow(16px 8px 36px #000000) drop-shadow(-6px -7px 32px rgba(49, 101, 247, 0.24))',
                                    borderRadius: '24px',
                                }}
                            ></iframe>
                            <p className={"mt-2 not-italic font-semibold text-lg leading-7 flex items-center text-white"}>
                                Nusameta Virtual Economy: The Role of Currency
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            <section className="w-screen h-screen relative bg-[url('/images/bgCconnect.png')]">
                <div className="container mx-auto px-4 md:px-0">
                    <h1 className='lg:text-[60px] text-[2.5rem] font-bold tracking-widest z-10 text-center'>
                        Ready to Join Us?
                    </h1>
                    <p className='not-italic font-semibold lg:text-[24px] md:text-[20px] text-[1rem] leading-8 text-white
                    flex-none order-none self-stretch grow-0 text-center'>
                        Dive into CREATOR CONN3CT by Nusa Market
                        and redefine the digital landscape. Partner with visionaries to fuel creativity in virtual
                        realms. Embrace the future of digital
                        expression today!
                    </p>
                </div>
                <div
                    className={"w-[calc(100vw)] h-[calc(50vh-120px)] bg-[#000000] rounded-[50%_50%_0_0]" +
                        " drop-shadow-[-6px_-84px_32px_rgba(1,120,255,0.5)] relative"}>
                    <CircularBttn outterClass={"mt-5 md:mt-10 lg:mt-24"} />

                </div>
                <div className="z-50 bg-black pb-10 lg:pb-20">
                    <Image className={"w-full h-auto z-50"} src={"/images/nusamarketHalf.png"} alt={'nusamarket Half'} width={500} height={500}/>
                </div>
                <div className="absolute bottom-0 bg-black w-full text-center pb-6">
                    {/*<div className="w-3/4 h-0 flex-none order-none self-stretch grow-0 border border-t-[0.1px] border-white"></div>*/}
                    <span className={"not-italic font-normal text-[9px] lg:text-[11px] leading-4 text-[#777777]"}>
                          PT. Metaverse Indonesia Makmur © 2024 Nusameta&nbsp;
                    </span>
                    <span className={"h-[1px] border-l-[1px] border-l-[#777777] border-solid"}/>
                    <span className={"not-italic font-normal text-[9px] lg:text-[11px] leading-4 text-[#777777]"}>
                        &nbsp;Terms and Conditions
                    </span>
                    <div className="grid grid-cols-6 grid-rows-1 gap-3 mt-2">
                        <div className="col-span-4 col-start-2 flex justify-around">
                            <a href="https://www.youtube.com/">
                                <Image src={"/envelope.svg"} alt={'Email'} width={20} height={20}/>
                            </a>
                            <a href="https://www.youtube.com/">
                                <Image src={"/discord.svg"} alt={'discord'} width={20} height={20}/>
                            </a>
                            <a href="https://www.youtube.com/">
                                <Image src={"/youtube.svg"} alt={'youtube'} width={20} height={20}/>
                            </a>
                            <a href="https://www.youtube.com/">
                                <Image src={"/telegram.svg"} alt={'telegram'} width={20} height={20}/>
                            </a>
                        </div>
                    </div>
                </div>

                <div>

                </div>
            </section>

        </main>
    )
}

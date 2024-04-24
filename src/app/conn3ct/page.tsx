"use client"

import FolderFlip from "@/components/folderFlip";
import CircularBttn from "@/components/circularBttn";
import Image from "next/image"
import Header from "@/components/Header";
import {useEffect, useState} from "react";
import {Dialog} from 'primereact/dialog';
import {screenSize} from "@/components/folderFlip/screen"

function SectionOne (): JSX.Element{
    return (
        <section className="w-screen h-screen relative bg-[#000F22]">
            <div className="container mx-auto px-4 md:px-0 text-white">
                <div className="flex-col lg:flex-row grid lg:grid-cols-2 lg:gap-10 xl:gap-10 ">
                    <div>
                        <Image className="mt-0 md:mt-6 lg:mt-12 w-full h-auto" src={"/images/Section-1.png"}
                               alt={'Welcome Creators'} width={500}
                               height={500}/>
                    </div>
                    <div className="content-center">
                        <h2 className='lg:text-[50px] text-[2rem] font-bold tracking-widest mt-5 font-manrope'>
                            Welcome Creators
                        </h2>
                        <p className='lg:text-[16px] text-[14px] font-normal mt-2 font-openSans'>
                            Explore CREATOR CONN3CT by Nusa Market, where artists and
                            <br />brands reshape the digital world. Join us to collaborate
                            <br />with visionary partners, empowering creativity in virtual realms.
                            <br />Embrace the future of digital expression today.
                        </p>
                    </div>
                </div>
            </div>
            <div className="border-solid border-[1px] w-full border-[#13315c] absolute bottom-0"></div>
        </section>
    )
}

function SectionTwo ():JSX.Element {
    return (
        <section className="w-screen h-screen relative bg-[#000F22]">
            <div className="container mx-auto px-4 md:px-0">
                <div className="flex-col lg:flex-row grid lg:grid-cols-2 lg:gap-10 xl:gap-10">
                    <div>
                        <Image className="mt-0 md:mt-6 lg:mt-12 w-full h-auto" src={"/images/Section-2.png"}
                               alt={'Benefits'}
                               width={500}
                               height={500}/>
                    </div>
                    <div className="content-center">
                        <p className='font-manrope not-italic font-semibold lg:text-[24px] md:text-[20px] text-[13px] leading-2
                            md:leading-8 lg:leading-[36px] xl:leading-[36px] flex items-center text-white flex-none order-none self-stretch grow-0'>
                            Whether you&apos;re an artist or a brand,
                            <br />CREATOR CONN3CT offers benefits
                            <br />and opportunities for your next
                            <br />project, from monetization and
                            <br />exposure.
                        </p>


                        <div className="grid grid-cols-2 grid-rows-2 gap-3 mt-2">
                            <div className="not-italic font-bold text-[20px] md:text-lg leading-7 lg:leading-[28px] flex
                            text-[#D0D0D0] flex-none order-none grow-0 font-manrope">
                                For Creator
                            </div>
                            <div>
                                <ul className="list-disc not-italic font-normal text-xs md:text-lg leading-4 items-center text-[#D0D0D0]
                                order-1 grows font-openSans text-left">
                                    <li>Monetization Opportunities</li>
                                    <li>Exposure and Visibility</li>
                                    <li>Networking and Industry Connections</li>
                                </ul>
                            </div>
                            <div className="not-italic  font-bold  text-[20px]  md:text-lg leading-7 lg:leading-[28px]
                            flex text-[#D0D0D0] flex-none order-none grow-0 font-manrope">
                                For Brand
                            </div>
                            <div>
                                <ul className="list-disc not-italic font-normal text-xs md:text-lg leading-4 items-center text-[#D0D0D0]
                                    order-1 grows font-openSans text-left">
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
    )
}

function SectionThree():JSX.Element{
    const joinTheProgram: string[] = [
        "Visit <br /> nusamarket.io/ conn3ct",
        'Input <br /> Information',
        'Profile <br /> Submission',
        'Read Agreement <br /> and Submit',
        'Review <br /> Document',
        'Confirmation <br /> via email'
    ]

    return (
        <section className="w-screen h-screen relative bg-[#000F22]">
            <div className="container mx-auto  px-4 md:px-0">
                <div
                    className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-3 lg:gap-5 lg:mt-12">
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
                                    text-white flex-none order-1 self-stretch grow-0" dangerouslySetInnerHTML={{__html: text}} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}


export default function Connect(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        console.log(visible)
    }, [visible]);


    const steps = [
        {
            header: (
                <Header num={0o1} title={"About Program"} />
            ),
            content: (
                <SectionOne/>
            )
        },
        {
            header: (
                <Header num={0o2} title={"Benefits"} />
            ),
            content: (
                <SectionTwo/>
            )
        },
        {
            header: (
                <Header num={0o3} title={"Join the Program"} />
            ),
            content: (
                <SectionThree />
            )
        }
    ]


    return (
        <main>
            <Dialog header="Terms and Conditions"
                    breakpoints={{ '960px': '75vw', '641px': '100vw' }}
                    visible={visible} style={{width: '50vw', height: "50vh"}}
                    onHide={() => setVisible(false)}>
                <iframe src={"/pdf/MIM - Nusameta Creator - Terms and Conditions (2024).pdf"}
                        style={{width: '100%', height: '100%'}} frameBorder="0"></iframe>
            </Dialog>

            <div style={{height: "100vh", width: "100%", overflowY: "scroll"}}>
                <section className="w-screen h-screen relative bg-[url('/images/bgCconnect.png')] ">
                    <div className="flex flex-col justify-center text-center items-center text-white">
                        <img className="relative lg:mt-16 mt-16 z-10" src={'/images/logo.png'} alt={'Logo Connect'}
                             width={277.58} height={30}/>
                        <p className='lg:text-[24px] text-[20px] z-10 mt-[110px]'>
                            Forge Creative Partnerships in Web 3.0 with
                        </p>
                        <h1 className='lg:text-[60px] text-[2.5rem] font-bold tracking-widest z-10'>
                            CREATOR CONN3CT
                        </h1>
                        <CircularBttn outterClass={"mt-5 md:mt-10 lg:mt-[35px] xl:mt-[35px]"}/>

                        <div className="w-full h-full">
                            <img src={'/Rectangle.svg'} alt={'Rectangle Connect'}
                                 className="object-cover md:object-contain h-full w-full absolute bottom-0"/>
                        </div>
                    </div>
                </section>
                <FolderFlip Steps={steps}/>
                <section className="w-screen bg-[#000F22] pb-40 md:pb-40 lg:pb-72 xl:pb-72">
                    <div className="container mx-auto px-4 md:px-0 text-white">
                        <h2 className='font-manrope lg:text-[60px] md:text-[2.5rem] text-[2rem] font-semibold tracking-widest text-center'>
                            Watch
                        </h2>
                        <p className="font-openSans not-italic font-normal text-[18px] leading-7 text-centaer text-[#D0D0D0] text-center">
                            Our latest post
                        </p>
                        <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-3 mt-10">
                            <div className={"my-12 md:mt-0"}>
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
                                <p className={"mt-2 font-manrope not-italic font-semibold text-lg leading-7 flex items-center text-white"}>
                                    Getting started with Nusameta:
                                    <br/>Explore Nusameta&lsquo;s Journey
                                    <br/>into the Metaverse
                                </p>
                            </div>
                            <div className={"my-12 md:mt-0"}>
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
                                <p className={"mt-2 font-manrope not-italic font-semibold text-lg leading-7 flex items-center text-white"}>
                                    Virtual Economic in Nusamarket:
                                    <br/>Revealing the Future
                                </p>
                            </div>
                            <div className={"my-12 md:mt-0"}>
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
                                <p className={"mt-2 font-manrope not-italic font-semibold text-lg leading-7 flex items-center text-white"}>
                                    Nusameta Virtual Economy:
                                    <br/>The Role of Currency
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-screen h-auto bg-cover bg-center bg-[url('/images/bgCconnect.png')]">
                    <div
                        className={"w-[calc(100vw)] h-[650px] xl:h-[calc(50vw)] lg:h-[calc(50vw)] bg-[#000000] rounded-[100vw_100vw_0_0]" +
                            " drop-shadow-[-6px_-84px_32px_rgba(1,120,255,0.5)]"}>
                        <div className="container mx-auto px-4 md:px-0 pt-[140px] xl:pt-[140px] lg:pt-[140px]">
                            <h1 className='lg:text-[40px] text-[2rem] font-bold tracking-widest z-10 text-center text-white'>
                                Ready to Join Us?
                            </h1>
                            <p className='not-italic font-semibold lg:text-[24px] md:text-[20px] text-[1rem] leading-8 text-white
                    flex-none order-none self-stretch grow-0 text-center'>
                                Dive into CREATOR CONN3CT by Nusa Market
                                and redefine the digital landscape.
                                <br/>
                                Partner with visionaries to fuel creativity in
                                virtual realms.
                                <br/>
                                Embrace the future of digital
                                expression today!
                            </p>
                        </div>
                        <CircularBttn outterClass={"mt-5 md:mt-10 lg:mt-24"}/>

                    </div>

                    <div className="bg-black">
                        <Image className={"w-full h-auto z-50 "} src={"/images/nusamarketHalf.png"}
                               alt={'nusamarket Half'}
                               width={500} height={500}/>

                        <div className="flex justify-center mt-10 lg:mt-32">
                            <svg width="80%" height="1" viewBox="0 0 1320 1" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <line x1="4.37114e-08" y1="0.5" x2="1320" y2="0.500115"
                                      stroke="url(#paint0_linear_12_2442)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_12_2442" x1="0" y1="1" x2="1320" y2="1.00301"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white" stopOpacity="0.08"/>
                                        <stop offset="0.506653" stopColor="white" stopOpacity="0.48"/>
                                        <stop offset="1" stopColor="white" stopOpacity="0.08"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className="relative bg-black w-full text-center pb-6">
                        {/*<div className="w-3/4 h-0 flex-none order-none self-stretch grow-0 border border-t-[0.1px] border-white"></div>*/}
                        <span
                            className={"not-italic font-normal text-[9px] lg:text-[11px] leading-4 text-[#777777]"}>
                          PT. Metaverse Indonesia Makmur © 2024 Nusameta&nbsp;
                    </span>
                        <span className={"border-l-[1px] border-l-[#777777] border-solid"}/>
                        <span
                            className={"not-italic font-normal text-[9px] lg:text-[11px] leading-4 text-[#777777]"}>
                            <button onClick={() => {
                                if (window.screen.width < screenSize.md.screen) {
                                    window.open("https://drive.google.com/file/d/1nJi8x8x-tWWI0drd82IdhNnse9y5SRus/view", "_blank")
                                } else setVisible(true)
                            }}>
                                 &nbsp;Terms and Conditions
                            </button>
                    </span>
                        <div className="grid grid-cols-6 grid-rows-1 gap-3 mt-2">
                            <div className="col-span-4 col-start-2 flex justify-around">
                                <a href="mailto:help@nusamarket.io.com">
                                    <Image src={"/envelope.svg"} alt={'Email'} width={20} height={20}/>
                                </a>
                                <a href="https://discord.gg/WjKtDfR329" className="cursor-pointer" target="_blank">
                                    <Image src={"/discord.svg"} alt={'discord'} width={20} height={20}/>
                                </a>
                                <a href="https://www.youtube.com/@Nusa.Market" className="cursor-pointer"
                                   target="_blank">
                                    <Image src={"/youtube.svg"} alt={'youtube'} width={20} height={20}/>
                                </a>
                                <a href="https://t.me/NusametaCircles" className="cursor-pointer" target="_blank">
                                    <Image src={"/telegram.svg"} alt={'telegram'} width={20} height={20}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </main>
    )
}

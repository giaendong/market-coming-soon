import React from 'react';

const Index = () => {
    const Letter: string[] = "JOIN NOW JOIN NOW JOIN".split("");
    return (
        <div className="relative z-50 mt-5">
            <section id="circular-text">
                {Letter.map((item: string, index: number) => {
                    return (
                        <span
                            key={index}
                            className="letter absolute translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4"
                            style={{
                                transform: `rotate(${index * 15.99}deg)`
                            }}
                        >
                              {item}
                            </span>
                    );
                })}
            </section>
            <button role="button"
                    className="absolute left-2/4 top-2/ -translate-x-2/4 translate-y-[40%] cursor-pointer flex items-center justify-center z-10 w-[80px] h-[80px] rounded-full"
                    style={{
                        backgroundImage: "linear-gradient(to bottom, #1c90ff, #0085ff, #0078ff, #006bff, " +
                            "#005dff, #0067ff, #0070ff, #0079ff, #0095ff, #00adff, #00c3ff, #1fd6fc)",
                        boxShadow: "8px 12px 25px rgba(15, 30, 80, 0.7), inset -3px -3px 8px rgba(24, 43, 113, 0.32), inset 2px 4px 8px rgba(255, 255, 255, 0.4)"
                    }}>
                <img className="w-[40px] md:w-[54px] lg:w-[64px]" src={'/images/NusmetLogo.png'}
                     alt={'Logo Connect'}/>
            </button>
        </div>
    );
};


export default Index;

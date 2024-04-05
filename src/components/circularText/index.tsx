"use client"
import React, { useEffect, useState } from 'react';

interface CircularTextProps {
    txt: string;
    radius: number;
    className?: string;
}

const CircularText: React.FC<CircularTextProps> = ({ txt, radius, className }) => {
    const [textElements, setTextElements] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const txtArray = txt.split("");
        const deg = 360 / txtArray.length;
        let origin = 0;

        const elements = txtArray.map((ea, index) => {
            const style: React.CSSProperties = {
                height: `${radius}px`,
                position: 'absolute',
                transform: `rotate(${origin}deg)`,
                transformOrigin: '0 100%',
            };
            origin += deg;

            return <p key={index} className={""} style={style}>{ea}</p>;
        });

        setTextElements(elements);
    }, [txt, radius]);

    return (
        <div className="absolute -translate-x-2/4 -translate-y-[10%] left-2/4 top-2/4">
            <svg id="rotatingText" viewBox="0 0 200 200" width="200" height="200">
                <defs>
                    <path id="circle" d="M 100, 100
                m -75, 0
                a 75, 75 0 1, 0 150, 0
                a 75, 75 0 1, 0 -150, 0
                ">
                    </path>
                </defs>
                <text width="400">
                    <textPath alignmentBaseline="inherit" xlinkHref="#circle" className="text">
                        {txt}
                    </textPath>
                </text>
            </svg>
        </div>
    );
}

export default CircularText;

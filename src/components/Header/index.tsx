import React from 'react';
import PropTypes from 'prop-types';

interface Props{
    num: number,
    title: string
}
const Header = ({ num, title }: Props): JSX.Element => {
    return (
        <div style={{width: '100%', height: 'auto', background: '#000F22'}}>
            <div className="flex flex-row w-full bg-[#000F22] text-left align-middle pl-10 py-4">
                <p className="leading-[24px] text-[14px] font-normal text-white mr-3">
                    <small>
                        {num}
                    </small>
                </p>
                <p className="leading-[40px] text-[20px] lg:text-[36px] text-white font-bold">
                    &nbsp;{title}
                </p>
            </div>
        </div>
    );
};

Header.propTypes = {};

export default Header;

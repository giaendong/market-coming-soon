import React from 'react';
import PropTypes from 'prop-types';

interface Props{
    num: number,
    title: string
}
const Header = ({ num, title }: Props): JSX.Element => {
    return (
        <div className="flex flex-row w-full bg-[#000F22] text-left align-middle pl-10 px-10">
            <p className="leading-[24px] text-[14px] font-normal text-white mr-3">
                <small>
                    {num}
                </small>
            </p>
            <p className="leading-[40px] text-[20px] lg:text-[36px] text-white font-bold">
                &nbsp;{title}
            </p>
        </div>
    );
};

Header.propTypes = {};

export default Header;

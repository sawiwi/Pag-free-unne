import React from 'react';
import { useState, useEffect } from 'react';
import { iconsList } from '../../../../components/Icons/index';
import { Fade } from 'react-awesome-reveal';
import HeadingSection from '../../../HeadingSection/HeadingSection';
import { Link } from 'react-router-dom';
import Carding from './Carding';


const WhyUnneInfo = ({ data, title }) => {
    const {
        IoIosArrowDown,
        RiUserSearchFill,
        BsBarChartFill,
        GiMoneyStack,
        TbPigMoney,
        TbArrowBigRightFilled,
        TbArrowBigDownFilled,
    } = iconsList;

    const renderIcon=()=>{
        const mapIcon={
            'RiUserSearchFill':<RiUserSearchFill size="6rem" color="grey" />,
            'BsBarChartFill':<BsBarChartFill size="6rem" color="grey" />,
            'GiMoneyStack':<GiMoneyStack size="6rem" color="grey" />,
        };
        return mapIcon[data.icon];
    };

    return (
        <Fade delay={300} direction="right" triggerOnce={true}>
            <HeadingSection
                title={title}
            />
            <div className="">
                <div className="flex flex-wrap flex-row items-center justify-center  w-full">
                    <div className="flex flex-wrap justify-center px-10 pb-10 m-2  text-center items-stretch">

                        {data.length > 0 && data.map((prop) => (
                            <Carding data={prop} key={prop.id}/>
                        ))}



                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default WhyUnneInfo;


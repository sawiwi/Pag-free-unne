import React from 'react'
import { iconsList } from '../../../../components/Icons/index';
import QvEquipo from '../../../Icons/custom/qvEquipo';
import QvMayor from '../../../Icons/custom/qvMayor';
import QvVende from '../../../Icons/custom/qvVende';

const Carding = ({data}) => {
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
            'customEquipo':<QvEquipo width={100} height={100} viewBox="0 0 512 512" className='text-[#808080]'/>,
            'customMayor':<QvVende width={100} height={100} viewBox="0 0 512 512" className='text-[#808080]'/>,
            'customVende':<QvMayor width={100} height={100} viewBox="0 0 512 512" className='text-[#808080]'/>,
        };
        return mapIcon[data.icon];
    };
    return (
        <div className="card w-80 min-h-[23.5rem] m-6  bg-gray-200 shadow-xl hover:scale-110 transition duration-500">
            <div>
                <figure className="px-10 pt-10">
                    {renderIcon()}
                </figure>
            </div>
            <div className="card-body items-center text-center">
                <div>
                    <h2 className="card-title text-gray-800">{data.title}</h2>
                </div>

                <div>
                    <p className="text-gray-600">
                        {data.text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Carding

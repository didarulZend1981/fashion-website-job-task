import React from 'react'

const SectionTitle = ({subHeader,mainHeader,classNameSubHeader="font-normal text-[19px] leading-[24.7px] text-[#7E53D4]",classNameMainHeader="font-bold text-[28px] leading-[36.4px] text-[#1D1D1D]"}) => {
  
    return (
        <div>
            <h3 className={`uppercase text-gray-500 lg:text-[19px] text-[14px] ${classNameSubHeader}`}>
                {subHeader}
            </h3>
            <h2 className={`text-primary font-bold lg:text-4xl text-[18px] text-italic ${classNameMainHeader}`}>
                {mainHeader}
            </h2>
        </div>
    )
}

export default SectionTitle;
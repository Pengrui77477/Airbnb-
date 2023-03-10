import ICONLOGO from '@/assets/svg/icon_logo'
import React, { memo } from 'react'
import { LeftWrapper } from './style'
// import img from '@/assets/img/logo.jpg'
const HeaderLeft = memo(() => {
    return (
        <LeftWrapper>
            <div className="logo">
                <ICONLOGO />
            </div>
            {/* <img className='img' src={img} alt="" /> */}
        </LeftWrapper>
    )
})

export default HeaderLeft
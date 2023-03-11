import ICONLOGO from '@/assets/svg/icon_logo'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { LeftWrapper } from './style'
// import img from '@/assets/img/logo.jpg'
const HeaderLeft = memo(() => {
    const navigate = useNavigate()
    const handleLogoClick = ()=>{
        navigate("/home")
    }

    return (
        <LeftWrapper>
            <div className="logo" onClick={handleLogoClick}>
                <ICONLOGO />
            </div>
            {/* <img className='img' src={img} alt="" /> */}
        </LeftWrapper>
    )
})

export default HeaderLeft
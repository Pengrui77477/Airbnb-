import { IcomoonArrowRight } from '@/assets/svg/icon_arrow_right'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { SectionFooterWrapper } from './style'

const SectionFooter = memo((props) => {
    const { name } = props;
    let showMessage = "显示更多"
    if (name) showMessage = `显示更多${name}房源`;

    const navigate = useNavigate()
    const moreClickHandle = ()=>{
        navigate("/entire")
    }
    return (
        <SectionFooterWrapper color={name ? '#00848A' : '#000'}>
            <div className="footer-info" onClick={moreClickHandle} >
                <span className='text'>{showMessage}</span>
                <span className='icon'>
                    <IcomoonArrowRight />
                </span>
            </div>
        </SectionFooterWrapper>
    )
})

SectionFooter.propTypes = {
    name: PropTypes.string
}

export default SectionFooter
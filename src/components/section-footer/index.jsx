import { IcomoonArrowRight } from '@/assets/svg/icon_arrow_right'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionFooterWrapper } from './style'

const SectionFooter = memo((props) => {
    const { name } = props;
    let showMessage = "显示更多"
    if (name) showMessage = `显示更多${name}房源`;
    return (
        <SectionFooterWrapper color={name ? '#00848A' : '#000'}>
            <div className="footer-info">
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
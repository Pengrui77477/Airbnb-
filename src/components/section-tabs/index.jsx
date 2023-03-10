import ScollContainer from '@/base-ui/scoll-container'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { SectionTabWrapper } from './style'

const SectionTab = memo((props) => {
    const { tabNames = [], tabClick } = props

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleItemClick = (index, name) => {
        setCurrentIndex(index);
        tabClick(index, name);
    }
    return (
        <SectionTabWrapper>
            <ScollContainer>
                {
                    tabNames.map((item, index) => {
                        return (
                            <div
                                key={item}
                                className={classNames("item", { active: currentIndex === index })}

                                onClick={e => handleItemClick(index, item)}
                            >
                                {item}
                            </div>
                        )
                    })
                }
            </ScollContainer>
        </SectionTabWrapper>
    )
})

SectionTab.propTypes = {
    tabNames: PropTypes.array,
    tabClick: PropTypes.func
}

export default SectionTab
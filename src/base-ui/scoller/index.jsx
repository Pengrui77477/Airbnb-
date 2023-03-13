import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ScollContainerWrapper } from './style'
import { IcomoonArrowLeft } from '@/assets/svg/icon_arrow_left';
import { IcomoonArrowRight } from '@/assets/svg/icon_arrow_right';
const ScollContainer = memo((props) => {
    const { flexGap = "16px" } = props;
    const [showRight, setShowRight] = useState(false);
    const [postIndex, setPostIndex] = useState(0);
    let totalDistanceRef = useRef()
    const scrollContentRef = useRef();

    useEffect(() => {
        const scrollWidth = scrollContentRef.current.scrollWidth;
        const clientWidth = scrollContentRef.current.clientWidth;
        const totalDistance = scrollWidth - clientWidth;
        totalDistanceRef.current = totalDistance;
        setShowRight(totalDistance > 0);
    }, [props.children])

    const handleMoveTab = (offset) => {
        const newIndex = postIndex + offset;
        const newEl = scrollContentRef.current.children[newIndex];
        const newElOffsetLeft = newEl.offsetLeft;
        scrollContentRef.current.style.transform = `translateX(-${newElOffsetLeft}px)`;
        setPostIndex(newIndex);
        setShowRight(totalDistanceRef.current > newElOffsetLeft)
    }

    return (
        <ScollContainerWrapper flexGap={ flexGap }>
            {
                postIndex > 0 &&
                <div className="button left" onClick={e => handleMoveTab(-1)}>
                    <IcomoonArrowLeft />
                </div>
            }
            {
                showRight &&
                <div className="button right" onClick={e => handleMoveTab(1)}>
                    <IcomoonArrowRight />
                </div>
            }
            <div className="slotContainer">
                <div className="slot" ref={scrollContentRef}>
                    {props.children}
                </div>
            </div>

        </ScollContainerWrapper>
    )
})

ScollContainer.propTypes = {
    flexGap: PropTypes.string
}

export default ScollContainer
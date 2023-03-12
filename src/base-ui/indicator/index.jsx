import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const IndicatorContainer = memo((props) => {

  const { currentIndex } = props;
  const indicatorRef = useRef();

  useEffect(() => {
    if ( typeof currentIndex !== 'number') return;
    const currentEl = indicatorRef.current.children[currentIndex];

    const indicatorWidth = indicatorRef.current.clientWidth;
    const indicatorScroll = indicatorRef.current.scrollWidth;

    const childrenOffset = currentEl.offsetLeft;
    const childrenSelfWidth = currentEl.clientWidth;

    let movePx = childrenOffset + childrenSelfWidth * 0.5 - indicatorWidth * 0.5;
    if (movePx < 0) movePx = 0;
    const totalDistance = indicatorScroll - indicatorWidth;
    if (movePx > totalDistance) movePx = totalDistance;

    indicatorRef.current.style.transform = `translate(${-movePx}px)`;
  }, [currentIndex])

  return (
    <IndicatorWrapper>
      <div className="indicator" ref={indicatorRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  )
})

IndicatorContainer.propTypes = {
  currentIndex: PropTypes.number
}

export default IndicatorContainer
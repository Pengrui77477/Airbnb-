import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import { RoomWrapper } from './style';
import { Carousel } from 'antd';
import { IcomoonArrowLeft } from '@/assets/svg/icon_arrow_left';
import { IcomoonArrowRight } from '@/assets/svg/icon_arrow_right';
import IndicatorContainer from '@/base-ui/indicator';
import classNames from 'classnames';
const RoomItem = memo((props) => {
    const { itemData, roomWidth = "25%", paddingLength = "8px" } = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef()

    const controlClickHandle = (isRight = true) => {
        isRight ? sliderRef.current.next() : sliderRef.current.prev();
        let newIndex = 0
        const length = itemData.picture_urls.length;

        newIndex = isRight ? currentIndex + 1 : currentIndex - 1;
        if (newIndex < 0) newIndex = length - 1;
        if (newIndex === length) newIndex = 0;

        setCurrentIndex(newIndex);
    }

    const dotClickHandle = (index)=>{
        setCurrentIndex(index);
        sliderRef.current.goTo(index, true)
    }
    return (
        <RoomWrapper
            verifyColor={itemData.verify_info.text_color}
            roomWidth={roomWidth}
            paddingLength={paddingLength}
        >
            <div className='inner' title={itemData.name}>
                {
                    !!itemData.picture_urls
                        ?
                        <div className="slider">
                            <div className="control">
                                <div className="btn left" onClick={e => controlClickHandle(false)}>
                                    <IcomoonArrowLeft />
                                </div>
                                <div className="btn right" onClick={e => controlClickHandle(true)}>
                                    <IcomoonArrowRight />
                                </div>
                                <div className="dots">
                                    <IndicatorContainer currentIndex={currentIndex}>
                                        {itemData.picture_urls.map((item, index) => {
                                            return <span onClick={e => dotClickHandle(index)} className={classNames({ 'active': currentIndex === index })} key={item}>·</span>
                                        })}
                                    </IndicatorContainer>
                                </div>
                            </div>
                            <div className="cover-shadow"></div>
                            <Carousel dots={false} ref={sliderRef} >
                                {
                                    itemData?.picture_urls?.map(item => {
                                        return (
                                            <div key={item} className="cover">
                                                <img src={item} alt="" />
                                            </div>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                        :
                        <div className="cover">
                            <img src={itemData.picture_url} alt="" />
                        </div>

                }


                <div className="info">
                    <div className="desc">
                        {itemData.verify_info.messages.join(' · ')}
                    </div>
                    <div className="name">{itemData.name}</div>
                    <div className="price">￥{itemData.price}/晚</div>
                    <div className="bottom_info">
                        <div>
                            <Rating
                                value={itemData?.star_rating ?? 4}
                                precision={0.1}
                                readOnly
                                sx={{ fontSize: 12, color: itemData.star_rating_color }}
                            />
                            <span className='comment_count'>({itemData?.reviews_count})</span>
                        </div>

                        <span className='comment_content'>{
                            itemData?.bottom_info?.content && <Chip label={itemData.bottom_info.content} variant="outlined" size='small' />
                        }</span>
                        {/* <span className='comment_content'></span> */}
                    </div>
                </div>


            </div>
        </RoomWrapper>

    )
})

RoomItem.propTypes = {
    itemData: PropTypes.object,
    paddingLenth: PropTypes.string
}

export default RoomItem
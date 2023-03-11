import PropTypes from 'prop-types'
import React, { memo, useRef } from 'react'
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import { RoomWrapper } from './style';
import { Carousel } from 'antd';
import { IcomoonArrowLeft } from '@/assets/svg/icon_arrow_left';
import { IcomoonArrowRight } from '@/assets/svg/icon_arrow_right';
const RoomItem = memo((props) => {
    const { itemData, roomWidth = "25%", paddingLength = "8px" } = props;
    const sliderRef = useRef()
    const controlClickHandle = (isRight = true) => {
        isRight ? sliderRef.current.next() : sliderRef.current.prev();
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
                                <div className="left" onClick={e => controlClickHandle(false)}>
                                    <IcomoonArrowLeft />
                                </div>
                                <div className="right" onClick={e => controlClickHandle(true)}>
                                    <IcomoonArrowRight />
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
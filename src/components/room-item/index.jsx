import PropTypes from 'prop-types'
import React, { memo } from 'react'
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';

import { RoomWrapper } from './style';
const RoomItem = memo((props) => {

    const { itemData } = props;
    return (
        <RoomWrapper verifyColor={itemData.verify_info.text_color}>
            <div className='inner'>
                <div className="cover">
                    <img src={itemData.picture_url} alt="" />
                </div>
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
        </RoomWrapper>

    )
})

RoomItem.propTypes = {
    itemData: PropTypes.object,
}

export default RoomItem
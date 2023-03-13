import RoomItem from '@/components/room-item';
import { changeDetailInfoDataAction } from '@/store/modules/detail';
import { isEmptyObj } from '@/utils';
import PropTypes from 'prop-types'
import React, { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { EntireRoomsWrapper } from './style'

const EntireRooms = memo((props) => {
    const { entireList, totalCount, isLoading } = props;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const itemClickHandle = useCallback((itemData) => {
        dispatch(changeDetailInfoDataAction(itemData));
        navigate('/detail')
    },[navigate,dispatch]);

    return (
        <EntireRoomsWrapper>
            <h3 className='desc'>{totalCount}多处住宿</h3>
            <div className="entire-box">
                {
                    isEmptyObj(entireList) &&
                    entireList.map(item => {
                        return <RoomItem itemClick={itemClickHandle} key={item._id} itemData={item} roomWidth="20%" />
                    })
                }
            </div>
            {isLoading && <div className='masking-out'></div>}
        </EntireRoomsWrapper>
    )
})

EntireRooms.propTypes = {
    entireList: PropTypes.array,
    totalCount: PropTypes.number,
    isLoading: PropTypes.bool
}

export default EntireRooms
import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { EntireHeaderWrapper } from './style'
import filterData from '@/assets/constants-data/filter_data.json';
import classNames from 'classnames';
function EntireHeader(props) {
    const [checkedList, setCheckedList] = useState([]);
    const filterClickHandle = (index) => {
        const list = [...checkedList];
        const listIndex = list.findIndex(i => i === index);
        if (listIndex !== -1) {
            list.splice(listIndex, 1);
        } else {
            list.push(index);
        }
        setCheckedList(list);
    }
    return (
        <EntireHeaderWrapper>
            <div className="filter-wrapper">
                {
                    filterData.map((item, index) => {
                        return <div
                            key={index}
                            onClick={e => filterClickHandle(index)}
                            className={classNames('item', { 'active': checkedList.includes(index) })}
                        >
                            {item}
                        </div>
                    })
                }
            </div>

        </EntireHeaderWrapper>
    )
}

EntireHeader.propTypes = {}

export default EntireHeader

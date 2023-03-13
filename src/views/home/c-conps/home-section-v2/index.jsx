import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react'

import { HomeSectionV2Wrapper } from './style';
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTab from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
    const { infoData } = props;
    const initName = Object.keys(infoData?.dest_list)[0];
    const [name, setName] = useState(initName)
    const tabNames = infoData.dest_address?.map(item => item.name);
    const handleTabClick = useCallback((index, name) => {
        setName(name)
    }, [])
    return (
        <HomeSectionV2Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            <SectionTab tabNames={tabNames} tabClick={handleTabClick} />
            <SectionRooms roomList={infoData.dest_list?.[name]} roomWidth="33.333333%" />
            <SectionFooter name={name} />
            
        </HomeSectionV2Wrapper>
    )
})

HomeSectionV2.propTypes = {
    infoData: PropTypes.object
}

export default HomeSectionV2
import React from 'react'
import PropTypes from 'prop-types'
import { SectionV4Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import ScollContainer from '@/base-ui/scoller';
import RoomItem from '@/components/room-item';

function HomeSectionV4(props) {
    const {infoData} = props;
    return (
        <SectionV4Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            <ScollContainer flexGap="16px">
                {
                    infoData.list.map(item => {
                        return <RoomItem paddingLength="0" key={item.id} itemData={item} />
                    })
                }
            </ScollContainer>
        </SectionV4Wrapper>
    )
}

HomeSectionV4.propTypes = {
    infoData: PropTypes.object
}

export default HomeSectionV4

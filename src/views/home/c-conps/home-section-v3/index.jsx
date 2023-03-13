import React from 'react'
import PropTypes from 'prop-types'
import { SectionV3Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import ScollContainer from '@/base-ui/scoller';
import LongforItem from '@/components/longfor-item';

function HomeSectionV3(props) {
    const { infoData } = props;
    return (
        <SectionV3Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            <ScollContainer  flexGap="10px">
                {/* <div className="longfor-wrapper"> */}
                {
                    infoData.list.map(item => {
                        return <LongforItem  itemData={item} key={item.city} />
                    })
                }
                {/* </div> */}
            </ScollContainer>
        </SectionV3Wrapper>
    )
}

HomeSectionV3.propTypes = {
    infoData: PropTypes.object
}

export default HomeSectionV3

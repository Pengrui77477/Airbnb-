import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'


import HomeWrapper from './style'
import HomeBanner from './c-conps/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'

import HomeSectionV1 from './c-conps/home-section-v1'
const Home = memo(() => {

  const { goodPriceInfo, highScoreInfo } = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo
  }), shallowEqual);
  // console.log(highScoreInfo);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content-wrapper">
        <HomeSectionV1 infoData={goodPriceInfo} />
        <HomeSectionV1 infoData={highScoreInfo} />
        {/* <div className="rooms-container good-price">
          <SectionHeader title={goodPriceInfo.title} />
          <SectionRooms roomList={goodPriceInfo.list} />
        </div> */}
        {/* <div className="rooms-container high-score">
          <SectionHeader title={highScoreInfo.title} subtitle={highScoreInfo.subtitle} />
          <SectionRooms roomList={highScoreInfo.list} />
        </div> */}
      </div>
    </HomeWrapper>

  )
})

export default Home
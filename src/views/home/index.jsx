import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import HomeWrapper from './style'
import HomeBanner from './c-conps/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-conps/home-section-v1'
import HomeSectionV2 from './c-conps/home-section-v2'
import { isEmptyObj } from '@/utils/index';
import HomeSectionV3 from './c-conps/home-section-v3'
import HomeSectionV4 from './c-conps/home-section-v4'
const Home = memo(() => {
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longforInfo,
    plusInfo
  } = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo:state.home.plusInfo
  }), shallowEqual);
  // console.log(goodPriceInfo);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content-wrapper">
        {/* <HomeSectionV2 infoData={discountInfo} /> */}
        {isEmptyObj(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {isEmptyObj(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}

        {isEmptyObj(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {isEmptyObj(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        {isEmptyObj(longforInfo) && <HomeSectionV3 infoData={longforInfo} />}
        {isEmptyObj(plusInfo) && <HomeSectionV4 infoData={plusInfo} />}
        {/* <HomeSectionV1 infoData={highScoreInfo} /> */}
      </div>
    </HomeWrapper>

  )
})

export default Home
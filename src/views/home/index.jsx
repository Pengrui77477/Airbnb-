import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import HomeWrapper from './style'
import HomeBanner from './c-conps/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-conps/home-section-v1'
import HomeSectionV2 from './c-conps/home-section-v2'
import { isEmptyObj } from '@/utils/index';
const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector(state => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo
  }), shallowEqual);

  const dispatch = useDispatch()
  useEffect(() => {
    
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content-wrapper">
      {/* <HomeSectionV2 infoData={discountInfo} /> */}
        {
          isEmptyObj(discountInfo) && <HomeSectionV2 infoData={discountInfo} />
        }
        
        <HomeSectionV1 infoData={goodPriceInfo} />
        <HomeSectionV1 infoData={highScoreInfo} />
      </div>
    </HomeWrapper>

  )
})

export default Home
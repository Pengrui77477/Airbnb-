import { isEmptyObj } from '@/utils'
import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import DetailInfo from './c-conps/detail-infos'
import DetailPicture from './c-conps/detail-pictures'
import { DetailWrapper } from './style'

const Detail = memo(() => {

  const { detailInfo } = useSelector(state => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)
  return (
    <DetailWrapper>
      {isEmptyObj(detailInfo) && <DetailPicture detailInfo={detailInfo} />}
      <DetailInfo />
    </DetailWrapper>
  )
})

export default Detail
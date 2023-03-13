import { fetchEntireDataAction } from '@/store/modules/entire'
import { isEmptyObj } from '@/utils'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import EntireHeader from './c-conps/Entire-header'
import EntirePagination from './c-conps/Entire-Pagination'
import EntireRooms from './c-conps/Entire-rooms'
import { EntireWrapper } from './style'

const Entire = memo(() => {

  const { entireList, totalCount, currentPage, isLoading } = useSelector(state => ({
    entireList: state.entire.entireList,
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    isLoading: state.entire.isLoading
  }), shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEntireDataAction(0))
  }, [dispatch])
  return (
    <EntireWrapper>
      <EntireHeader />
      {isEmptyObj(entireList) && <EntireRooms totalCount={totalCount} entireList={entireList} isLoading={isLoading} />}
      {isEmptyObj(entireList) && <EntirePagination totalCount={totalCount} currentPage={currentPage} />}
      {/* <EntirePagination /> */}
    </EntireWrapper>
  )
})

export default Entire
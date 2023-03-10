import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import HeaderCenter from './chilrenComponents/header-center'
import HeaderLeft from './chilrenComponents/header-left'
import HeaderRight from './chilrenComponents/header-right'
const Header = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  )
})
export default Header
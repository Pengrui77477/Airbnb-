import ICONSEARCH from '@/assets/svg/icon_search'
import React, { memo } from 'react'
import { CenterWrapper } from './style'
const HeaderCenter = memo(() => {
    return (
        <CenterWrapper>
            <div className="search">
                <button>
                    <span>搜索房源和体验</span>
                    <div className="svg">
                        <ICONSEARCH />
                    </div>
                </button>
            </div>
        </CenterWrapper>

    )
})

export default HeaderCenter
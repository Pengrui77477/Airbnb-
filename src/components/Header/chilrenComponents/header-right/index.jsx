import ICONAVATAR from '@/assets/svg/icon_avatar'
import ICONGLOBAL from '@/assets/svg/icon_global'
import ICONMENU from '@/assets/svg/icon_menu'
import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
const HeaderRight = memo(() => {
    const [showPanel, setShowPanel] = useState(false);
    const handleShowPanel = () => {
        setShowPanel(!showPanel)
    }
    // 副作用
    useEffect(() => {
        function windowHandleClick() {
            // console.log(123);
            setShowPanel(false);
        }

        window.addEventListener('click', windowHandleClick, true);
        return () => {
            window.removeEventListener("click", windowHandleClick);
        }
    }, [])
    return (
        <RightWrapper>
            <div className='btn'>
                <span>登录</span>
                <span>注册</span>
                <span>
                    <ICONGLOBAL />
                </span>
            </div>
            <div className="profile" >
                <div className="profileBox" onClick={() => handleShowPanel()}>
                    <ICONMENU />
                    <div className="avator">
                        <ICONAVATAR />
                    </div>
                </div>
                {showPanel && (
                    <div className="panel">
                        <div className="top">
                            <div className="register">注册</div>
                            <div className="login">登录</div>
                        </div>
                        <div className="bottom">
                            <div>出租房源</div>
                            <div>开展体验</div>
                            <div>帮助</div>
                        </div>
                    </div>
                )}
            </div>
        </RightWrapper>
    )
})

export default HeaderRight
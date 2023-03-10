import React, { memo } from 'react'
import { FooterWrapper } from './style'
import footerData from '@/assets/constants-data/footer.json'

const Footer = memo(() => {

    return (
        <FooterWrapper>
            <div className="footer-content">
                <footer >
                    <div className="footerInfo">
                        {
                            footerData.map(item => {
                                return (
                                    <div key={item.name} className="item">
                                        <h4>{item.name}</h4>
                                        {item.list.map(li_item => {
                                            return (
                                                <a href="/none" key={li_item}>
                                                    <li >{li_item}</li>
                                                </a>
                                            )
                                        })}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="beian">
                        <span>© 2023 Airbnb, Inc. All rights reserved.</span>
                        <div><a href="/none">条款</a> · <a href="/none">隐私政策</a> ·<a href="/none"> 网站地图</a> · 全国旅游投诉渠道 12301</div>
                    </div>
                </footer>
            </div>
        </FooterWrapper>
    )
})

export default Footer
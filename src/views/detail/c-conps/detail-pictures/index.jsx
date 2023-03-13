import PictureBrowser from '@/base-ui/pictureBrowser';
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { DetailPictureWrapper } from './style'

const DetailPicture = memo((props) => {
    const [showBrowser, setShowBrowser] = useState(false);
    const { detailInfo } = props;

    const closePicBrowser = () => {
        setShowBrowser(false);
    }
    return (
        <DetailPictureWrapper>
            <div className="pic-box">
                <div className="left">
                    <div className="left-item item" onClick={e => setShowBrowser(true)}>
                        <img src={detailInfo.picture_urls[0]} alt="" />
                        <div className="cover"></div>
                    </div>

                </div>
                <div className="right">
                    {
                        detailInfo.picture_urls.slice(1, 5).map(item => {
                            return (
                                <div key={item} onClick={e => setShowBrowser(true)} className="right-item item">
                                    <img src={item} alt="" />
                                    <div className="cover"></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="show-browser-btn" onClick={e => setShowBrowser(true)}>
                显示更多
            </div>
            {showBrowser && <PictureBrowser closePicBrowser={closePicBrowser} pictureInfo={detailInfo.picture_urls} />}
        </DetailPictureWrapper>
    )
})

DetailPicture.propTypes = {
    detailInfo: PropTypes.object
}

export default DetailPicture
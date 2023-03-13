import React, { memo, useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { IcomoonArrowLeft } from '@/assets/svg/icon_arrow_left';
import { IcomoonArrowRight } from '@/assets/svg/icon_arrow_right';
import { IconCloseFill } from '@/assets/svg/icon_close';
import IndicatorContainer from '@/base-ui/indicator';
import { PictureBroswerWrapper } from './style'
import { IconArrowDropDown } from '@/assets/svg/icon_drop_down';
import { IconArrowDropUp } from '@/assets/svg/icon_drop_up';

const PictureBrowser = memo((props) => {

    const { pictureInfo, closePicBrowser } = props;
    const [currentPic, setCurrentPic] = useState(pictureInfo[0])
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isShowPic, setIsShowPic] = useState(true);
    //去除滚动条
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";

        }
    });
    const closePictureBrowser = () => {
        closePicBrowser()
    }
    const clickMovePicHanlde = (isRight) => {
        const length = pictureInfo.length;
        let newIndex;
        if (isRight) {
            newIndex = currentIndex + 1;

        } else {
            newIndex = currentIndex - 1;
        }

        if (newIndex < 0) newIndex = length - 1;
        if (newIndex > length - 1) newIndex = 0;
        setCurrentPic(pictureInfo[newIndex]);
        setCurrentIndex(newIndex);
    }
    const handleClickPic = (index) => {
        console.log(index);
        setCurrentPic(pictureInfo[index]);
        setCurrentIndex(index);
    }
    const handleShowPic = () => {
        const newIsShow = !isShowPic;
        setIsShowPic(newIsShow);
    }
    return (
        <PictureBroswerWrapper isShowPic={isShowPic}>
            <div className="pic-container">
                <div className="pic-header">
                    <div className="close" onClick={closePictureBrowser}>
                        <IconCloseFill />
                    </div>
                </div>
                <div className="pic-content">
                    <div className="icon left-arrow" onClick={e => clickMovePicHanlde(false)}>
                        <IcomoonArrowLeft />
                    </div>
                    <div className="pic">
                        <img src={currentPic} alt="" />
                    </div>
                    <div className="icon right-arrow" onClick={e => clickMovePicHanlde(true)}>
                        <IcomoonArrowRight />
                    </div>
                </div>
                <div className="pic-bottom">
                    <div className="pic-bottom-box">
                        <div className="info">
                            <div className="left-info">
                                <span> {currentIndex+1}/{pictureInfo.length} </span>
                            </div>
                            <div className="right-info" onClick={handleShowPic}>
                                <span >{isShowPic ? '隐藏' : '显示'}照片列表</span>
                                { isShowPic ? <span><IconArrowDropDown/></span> : <span> <IconArrowDropUp/> </span> }
                            </div>
                        </div>
                        <div className="pic-list">
                            <IndicatorContainer currentIndex={currentIndex}>
                                {
                                    pictureInfo.map((item, index) => {
                                        return (
                                            <div
                                                className={classNames('pic-item', { 'active': currentIndex === index })}
                                                key={index}
                                                onClick={e => handleClickPic(index)}
                                            >
                                                <img src={item} alt="" />
                                            </div>
                                        )
                                    })
                                }
                            </IndicatorContainer>
                        </div>


                    </div>
                </div>
            </div>

        </PictureBroswerWrapper>
    )
})

PictureBrowser.propTypes = {
    pictureInfo: PropTypes.array,
    closePicBrowser: PropTypes.func
}

export default PictureBrowser
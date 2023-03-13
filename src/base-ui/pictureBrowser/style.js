import styled from "styled-components";

export const PictureBroswerWrapper = styled.div`

    /* width: 100vh; */
    position: fixed;
    inset:0;
    background-color:#333;
    min-width:750px;
    
    img{
        width: 100%;
        height: 100%;
        object-fit:cover;
    }
    svg{
        font-size:4rem;
        color:#fff;
        cursor: pointer;
    }
    .pic-container{
        /* height: 80%; */
        display:flex;
        flex-direction: column;
        .pic-header{
            height: 6rem;
            position: relative;
            /* flex-shrink:0; */

            .close{
                position: absolute;
                right: 15px;
                top: 50%;
                transform:translateY(-50%);
            }
        }
        .pic-content{
            display: flex;
            align-items:center;
            max-width:1032px;
            min-height:480px;
            width: 80%;
            margin:0 auto;
            justify-content:space-between;
            svg{
                font-size:6rem;
            }
            /* .pic{
                max-width: 750px;
            } */
        }
        .pic-bottom{
            height: 110px;
            width: 60%;
            max-width:750px;
            margin:30px auto;
            overflow:hidden;
            display:flex;
            flex-direction:column;
            justify-content: flex-end;
            
            .pic-bottom-box{
                width: 100%;
                justify-content:center;
                position: relative;
                line-height: inherit;
                .info{
                    color:#fff;
                    font-size:12px;
                    display:flex;
                    justify-content:space-between;
                    margin-bottom:5px;
                    height: 22px;
                    line-height:22px;
                    .right-info{
                        cursor: pointer;
                        position: relative;
                        display:flex;
                        /* align-items:center; */
                        svg{
                            font-size:20px;
                        }
                        /* margin-right:15px; */
                        /* &::after{
                            content:'';
                            color:#fff;
                            border:6px solid;
                            border-color: #fff transparent transparent transparent;
                            position: absolute;
                            right:-15px;
                            top: 50%;
                            transform: translateY(-30%);
                        } */
                    }


                }
                .pic-list{
                    height:${props => props.isShowPic ? '80px' : '0'};
                    display: flex;
                    align-items:flex-end;
                    transition:height 0.2s ease;
                    .pic-item{
                        /* position: absolute; */
                        width: 100px;
                        height: 100%;
                        flex-shrink:0;
                        cursor: pointer;
                        margin-right:10px;
                        opacity:0.6;
                        &.active{
                            opacity:1;
                        }
                    }
                }
                
            }
            
            
        }
    }
`
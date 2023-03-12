import styled from "styled-components";

export const RoomWrapper = styled.div`
    width: ${props => props.roomWidth};
    padding:${props => props.paddingLength};
    
    .inner{
        
        /* background-color:#efefef; */
        width: 100%;
        transition: 0.2s ease;
        /* padding:5px; */
        &:hover{
            border-radius:10px;
            box-shadow: 0 2px 4px #B0B0B0;
            .cover-shadow{
                    position: absolute;
                    inset:0;
                    background: linear-gradient( 90deg, #000 ,transparent 10%,transparent 90%,#000);
                    opacity:0.5;
                    z-index:1;
                    cursor: pointer;
            }
            .slider{
                
                .control{
                    opacity:1;
                }
            }

        }
        >.slider{
            position: relative;
            overflow: hidden;
            border-radius:5px 5px 0 0;
            .control{
                opacity:0;
                .btn{
                    font-size:50px;
                    color:#fff;
                    position: absolute;
                    height: 100%;
                    display: flex;
                    align-items:center;
                    z-index:99;
                    top:50%;
                    transform:translateY(-50%);
                    cursor: pointer;
                    
                }
                .right{
                    right:0;
                }
                .dots{
                    position: absolute;
                    color:#fff;
                    font-size:42px;
                    z-index:9;
                    bottom:0px;
                    width: 35%;
                    height: 20px;
                    left: 0;
                    right: 0;
                    overflow:hidden;
                    margin:0 auto;
                    .active{
                        color:red;
                    }
                    cursor: pointer;
                }
            }
            .cover{
                position: relative;
                border:1px solid #efefef;
                padding:66.66% 8px 0;
                overflow:hidden;
                cursor: pointer;
                img{
                    position:absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
        >.cover{
            /* padding:8px; */
            position: relative;
            border-radius:5px;
            border:1px solid #efefef;
            padding:66.66% 8px 0;
            overflow:hidden;
            cursor: pointer;
            /* height: 66.66%; */
            img{
                position:absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
            }
        }
        
        
        .info{
            padding:10px;
            .desc{
                display:inline;
                font-size:12px;
                color:${props => props.verifyColor};
                margin:5px 0;
                ${props => props.theme.mixin.textDecoration};
                
            }
            .name{
                font-size:14px;
                font-weight:600;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
                color:${props => props.theme.color.textColor};
                cursor: pointer;
                padding:5px 0;
            }
            .price{
                font-size:14px;
                font-weight:600;
                margin-top:5px;
                cursor: pointer;
            }
            .bottom_info{
                display:flex;
                justify-content:space-between;

                .comment_count{
                    color:${props => props.theme.color.textColor3};
                    font-size:14px;
                }

                .comment_content{
                    .MuiChip-root{
                        .MuiChip-label{
                            font-size:12px;
                            color:${props => props.theme.color.textColor3}
                        }
                    }
                }
            }
        }
        
    }
`
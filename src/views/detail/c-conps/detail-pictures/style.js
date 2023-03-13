import styled from "styled-components";

export const DetailPictureWrapper = styled.div`
    margin-top:30px;
    position: relative;
    .pic-box{
        display: flex;
        max-height: 600px;
        >div{
            width: 50%;
            padding-top: 30%;
            cursor: pointer;
            overflow: hidden;
            position: relative;
            .item{
                border:1px solid #000;
                position: absolute;
                overflow: hidden;
                inset:0;
                width: 100%;
                height: 100%;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit:cover;
                    transition:transform 0.3s ease-in;
                }
                &:hover{
                    img{
                        transform:scale(1.06);
                    }
                }
                .cover{
                    position: absolute;
                    inset:0;
                    background-color:rgba(0,0,0,.2);
                    opacity:0;
                    transition:opacity 0.2s ease-in;
                }
            }
        }
        &:hover{
            >div{
                .cover{
                    opacity:1;
                }
                .item:hover{
                    .cover{
                        opacity:0 !important;
                    }
                }
            }
            
        }
        .right{
            height: 50%;
            .right-item{
                width: 50%;
                height: 50%;
                &:nth-child(2){
                    left:50%;
                }
                &:nth-child(3){
                    top:50%;
                }
                &:nth-child(4){
                    left:50%;
                    top:50%;
                }
            }
            
        }
        
        
    }
    .show-browser-btn{
        position: absolute;
        border:1px solid ${props => props.theme.color.borderColor};
        padding:6px 10px;
        right:15px;
        bottom:15px;
        cursor: pointer;
        border-radius:5px;
        background-color:#fff;
        font-size:14px;
    }
`
import styled from "styled-components";

export const RoomWrapper = styled.div`
    width: 25%;
    padding:8px;
    
    .inner{
        
        /* background-color:#efefef; */
        width: 100%;
        transition:0.2s ease;
        padding:5px;
        &:hover{
            border-radius:10px;
            box-shadow: 0 2px 4px #B0B0B0;
        }
        .cover{
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
`
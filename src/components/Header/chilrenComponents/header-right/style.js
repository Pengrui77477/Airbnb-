import styled from "styled-components";

export const RightWrapper = styled.div`
    flex:1;
    display:flex;
    justify-content:flex-end;
    height: 42px;
    .btn{
        display:flex;
        
        span{
            padding:12px;
            font-weight:600;
            font-size:14px;
            border-radius:20px;
            color:${props => props.theme.color.textColor};
            &:hover{
                background-color:#efefef;
                cursor: pointer;
            }
        }
    }
    .profile{
        
        width: 77px;
        border:1px solid ${props => props.theme.color.borderColor};
        border-radius:20px;
        color:#717171;
        margin:0 20px;
        
        
        
        position: relative;

        .profileBox{
            width: 100%;
            height: 100%;
            display:flex;
            align-items:center;
            justify-content: space-evenly;
            .avator{
                width: 30px;
                height: 30px;
            svg{
                width: 100%;
                height: 100%;
            }
        }
        }
        
        .panel{
            width: 240px;
            /* height: 243px; */
            position:absolute;
            overflow:hidden;
            top:50px;
            right:0;
            background-color:#fff;
            box-shadow:0 0 2px 1px rgba(0,0,0,.18);
            border-radius:20px;
            display:flex;
            flex-direction:column;
            /* padding:10px 0; */
            font-size:14px;
            font-weight:600;
            color:black;
            .top{
                border-bottom:1px solid ${props => props.theme.color.borderColor};
            }
            .top,.bottom{
                padding:10px 0;

                div{
                    height: 40px;
                    line-height:40px;
                    padding:0 16px;
                    &:hover{
                        background-color:${props => props.theme.color.shadowColor};
                    }
                }
            }
        }



        ${props => props.theme.mixin.boxShadow};
    }
`
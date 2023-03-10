import styled from "styled-components";

export const FooterWrapper = styled.div`
    
    border-top: 1px solid #efefef;
    margin-top:50px;

    .footer-content{
        width:1032px;
        margin:0 auto;
        padding:50px 0;
        footer{

            .footerInfo{
                display:flex;
                justify-content:space-between;
                font-size:14px;
                border-bottom:1px solid #efefef;
                padding-bottom:20px;
                .item{
                    h4{
                        padding-bottom:15px;
                    }
                    a{
                        color:${props => props.theme.color.textColor3};
                        ${props => props.theme.mixin.textDecoration}
                        li{
                            list-style:none;
                            margin-bottom:5px;
                            font-weight:600;
                        }
                    }
                    
                }
            }
            .beian{
                font-size:14px;
                text-align:center;
                margin-top:30px;
                color:${props => props.theme.color.textColor3};
                font-weight:600;
                div{
                    display:inline-block;
                    margin-left:7px;
                    a{
                        color:${props => props.theme.color.textColor3};
                        ${props => props.theme.mixin.textDecoration}
                }
                }
                
            }
        }
    }
`
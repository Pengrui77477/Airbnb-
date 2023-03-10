import styled from "styled-components";

export const SectionFooterWrapper = styled.div`
    
    .footer-info{
        height:25px;
        font-size:18px;
        ${props => props.theme.mixin.textDecoration}
        display:inline;
        position: relative;
        color:${props => props.color};
        span{
            
            font-weight:600;
            cursor: pointer;
        }
        .icon{
            width: 100%;
            svg{
                /* font-size:16px; */
                position:absolute;
                top:50%;
                transform:translateY(-45%);
                color:${props => props.color};

            }
        }
    }
    
`
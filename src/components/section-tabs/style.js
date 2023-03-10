import styled from "styled-components";

export const SectionTabWrapper = styled.div`
    .item{
        padding:14px 16px;
        flex-basis:130px;
        flex-shrink:0;
        border-radius:3px;
        white-space:nowrap;
        text-align:center;
        color:${props => props.theme.color.textColor};
        border:1px solid ${props => props.theme.color.borderColor};
        
        cursor: pointer;
        ${props => props.theme.mixin.boxShadow}
    }
    /* &::before{
        content:'';
        display:block;
        width:50px;
        height: 50px;
        background-color:skyblue;
        border-radius:25px;
        z-index:1;
    } */
    .active {
        color:#fff;
        background-color:${props => props.theme.color.secondColor}
    }
    
`
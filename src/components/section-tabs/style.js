import styled from "styled-components";

export const SectionTabWrapper = styled.div`
    display:flex;
    width: 100%;
    /* border:1px solid #efefef; */
    overflow:hidden;
    .item{
        padding:14px 16px;
        flex-basis:130px;
        flex-shrink:0;
        border-radius:3px;
        white-space:nowrap;
        text-align:center;
        color:${props => props.theme.color.textColor};
        border:1px solid ${props => props.theme.color.borderColor};
        margin-right:16px;
        cursor: pointer;
        ${props => props.theme.mixin.boxShadow}
    }
    &::before{
        content:'';
        display:block;
        width:10px;
        height: 10px;
        background-color:skyblue;
        border-radius:5px;
        z-index:1;
    }
    &:last-child{
        margin-right:0;
    }
    .active {
        color:#fff;
        background-color:${props => props.theme.color.secondColor}
    }
    
`
import styled from "styled-components";

export const EntireHeaderWrapper = styled.div`
    
    height: 46px;
    border-bottom:1px solid ${props => props.theme.color.borderColor};
    min-width: 1032px ;
    .filter-wrapper{
        display: flex;
        height: 100%;
        align-items:center;
        margin:0 30px 0;
        .item{
            height: 36px;
            line-height:36px;
            margin-right:20px;
            border:1px solid ${props => props.theme.color.borderColor};
            border-radius:5px;
            padding:0 16px;
            font-size:14px;
            font-weight:600;
            cursor: pointer;
            &.active{
                color:#fff;
                background-color:${props => props.theme.color.secondColor};
            }
        }
    }
    
`
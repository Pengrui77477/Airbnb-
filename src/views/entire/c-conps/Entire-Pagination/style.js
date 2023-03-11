import styled from "styled-components";

export const EntirePaginationWrapper = styled.div`
    display: flex;
    justify-content:center;
    .info{
        display:flex;
        flex-direction:column;
        align-items:center;
        .MuiPaginationItem-page.Mui-selected{
            background-color:#222;
            color:#fff;
        }
        .MuiPaginationItem-page{
            margin:0 8px;
            ${props => props.theme.mixin.textDecoration}
        }
        .desc{
            font-size:14px;
            margin-top:10px;
            color:${props => props.theme.color.textColor};
            /* font-weight:600; */
        }
    }
`
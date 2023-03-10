import styled from "styled-components";


export const CenterWrapper = styled.div`
    

    .search{
        width: 348px;
        height: 48px;

        button{
            width: 90%;
            height: 100%;
            border:1px solid ${props => props.theme.color.borderColor};
            background:none;
            border-radius:24px;
            display:flex;
            align-items:center;
            /* padding:0 20px; */
            justify-content:space-between;
            box-shadow: 0 3px 5px 1px ${props => props.theme.color.shadowColor};
            span{
                padding:0 16px;
                font-size:14px;
                font-weight:600;
            }
            .svg{
                width: 32px;
                height: 32px;
                background-color:${props => props.theme.color.primaryColor};
                border-radius:16px;
                padding:10px;
                margin: 7px 7px 7px 0;
                color:#fff;
            }

            ${props => props.theme.mixin.boxShadow}
        }
    }
`
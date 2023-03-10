import styled from "styled-components";

//color:${props => props.theme.color.primaryColor};
export const LeftWrapper = styled.div`
    flex:1;
    display:flex;
    color:${props => props.theme.color.primaryColor};
    align-items:center;
    
    .logo{
        cursor: pointer;
        margin:0 20px;
    }
    .img{
        width: 162px;
        height: 20px;
        cursor: pointer;
    }
`
import styled from "styled-components";

export const EntireRoomsWrapper = styled.div`
    margin: 20px 30px;
    position: relative;
    .desc{
        margin-left:8px;
    }
    .entire-box{
        display: flex;
        flex-wrap:wrap;
        min-width: 1032px ;

        /* gap:10px; */
    }
    .masking-out{
        position: absolute;
        inset:0;
        /* left:0;
        top:0;
        right:0;
        bottom:0; */
        background-color:rgba(255,255,255,.8);
    }
`
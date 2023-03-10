import styled from "styled-components";

export const LongforWrapper = styled.div`
    
    flex-shrink:0;
    width: 20%;
    position: relative;
    cursor: pointer;
    border-radius:6px;
    overflow:hidden;
    .cover{

        img{
            width: 100%;
        }
    }
    .bg-cover{
        width: 100%;
        height: 100%;
        position: absolute;
        top:0;
        left:0;
        background: linear-gradient(transparent 70%,#000);
        /* opacity:0.5; */
    }
    .info{
        width: 100%;
        position: absolute;
        color:#fff;
        font-weight:600;
        z-index:1;
        bottom:40px;
        text-align:center;
        .city{
            font-size:18px;
            margin-bottom:5px;
        }
        .price{
            font-size:12px;
        }
    }
`
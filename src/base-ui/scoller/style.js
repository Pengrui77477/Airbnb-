import styled from "styled-components";

export const ScollContainerWrapper = styled.div`
    
    position: relative;
    .button{
        width: 30px;
        height: 30px;
        border-radius:15px;
        position: absolute;
        top:50%;
        transform:translateY(-50%);
        cursor: pointer;
        border:1px solid #efefef;
        background-color:#fff;
        display:flex;
        justify-content:center;
        align-items:center;
        z-index:9;
        svg{
            text-align:center;
            font-size:24px;
        }
        /* padding:8px; */
    }
    .left{
        left:-15px;
        z-index:1;
    }
    .right{
        right:-15px;
    }
    .slotContainer{
        overflow: hidden visible;
        /* height: 105%; */
        .slot{
            width: 100%;
            
            gap:${props => props.flexGap};
            display:flex;
            transition: transform 200ms ease;
        
    }
    }
    
`
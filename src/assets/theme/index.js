const theme = {
    color: {
        primaryColor: '#ff385c',
        secondColor: '#00848A',
        textColor: '#484848',
        textColorSecondary: '#222',
        textColor3:'#717171',
        borderColor:'#DDDDDD',
        shadowColor:'#EBEBEB',
    },
    mixin: {
        boxShadow: `
            transition: box-shadow 0.2s ease;
            &:hover{
                cursor: pointer;
                box-shadow: 0 2px 4px #B0B0B0;
            }
        `,
        textDecoration:`
            cursor: pointer;
            &:hover{
                text-decoration:underline;
            }
        `
    }

}

export default theme;
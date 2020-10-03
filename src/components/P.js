import styled from 'styled-components'

const P = styled.p`
    line-height: 1.7em;
    margin: ${({margin}) => margin};
    color: ${({theme}) => theme.colors.text};
`

P.defaultProps = {
    margin: 'auto',
    theme: {
        colors: {
            text: 'inherit'
        }
    }
}



export default P
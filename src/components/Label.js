import styled from 'styled-components'

const Label = styled.label`
    margin: ${({margin}) => margin ? margin : '1em 0 0 0'};
    font-weight: 600;
`

export default Label
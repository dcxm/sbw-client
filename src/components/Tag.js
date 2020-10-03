import styled, {css} from 'styled-components'

const Tag = styled.span`
    display: inline-block;
    margin: .2em .2em;
    padding: .4em .8em;
    font-size: .9em;
    font-weight: 500;
    border-radius: .5em;
    cursor: pointer;
    ${({theme, color}) => css`
    background-color: ${theme.colors.primary};
    color: ${!color ? theme.colors.text : color};
    `}
`

Tag.defaultProps = {
    theme: {
        colors: {
            primary: 'gray'
        }
    },
    color: 'black'
}

export default Tag
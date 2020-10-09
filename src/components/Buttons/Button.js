import styled from 'styled-components'

const Button = styled.button`
    display: block;
    padding: ${({ size }) => `${size * 0.5}em ${size * 1}em`};
    font-size: 1em;
    cursor: pointer;
    font-weight: 600;
    font-family: 'Montserrat';
    background-color: ${({ color, theme, bordered }) => {
        if (!bordered) {
            if (color === 'primary') return theme.colors.primary
            if (color === 'secondary') return theme.colors.secondary
        } else return 'white'
    }};
    color: ${({ textColor, theme }) => textColor ? textColor : theme.colors.text};
    border: ${({ bordered, borderColor, theme }) => bordered ?
        `2px solid ${borderColor ? borderColor : theme.colors.borders}`
        : `none`};
    border-radius: ${({ rounded }) => rounded ? '2em' : '0'};
`

Button.defaultProps = {
    size: 1
}

export default Button
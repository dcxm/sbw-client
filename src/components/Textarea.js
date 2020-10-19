import styled from 'styled-components'

const Textarea = styled.textarea`
    display: block;
    font-family: 'Montserrat';
    box-sizing: border-box;
    font-size: 1em;
    padding: ${({ size }) => size ? `${size * 0.5}em ${size * 0.7}em` : '0.5em 0.7em'};
    margin: 1em 0;
    resize: vertical;
    border-radius: 1em;
    min-width: 100%;
    max-width: 100%;
    line-height: 2em;
    min-height: 15em;
    height: auto;
    border: 2px solid ${({ theme }) => theme.colors.borders};
    transition: all .1s;
    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ focusColor }) => focusColor ? focusColor : '#e3e3e3'}
    }
`

export default Textarea
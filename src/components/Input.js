import styled from 'styled-components'

const Input = styled.input`
    display: block;
    font-family: 'Montserrat';
    box-sizing: border-box;
    font-size: 1em;
    padding: ${({ size }) => size ? `${size * 0.5}em ${size * 0.7}em` : '0.5em 0.7em'};
    margin: 1em 0;
    border-radius: 2em;
    width: 100%;
    border: 2px solid ${({theme}) => theme.colors.borders};
    transition: all .1s;
    &:focus {
        outline: none;
        border-color: ${({theme}) => theme.colors.primary};
        background-color: ${({focusColor}) => focusColor ? focusColor : '#e2e2e2'}
    }
`


export default Input
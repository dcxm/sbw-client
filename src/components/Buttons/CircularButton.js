import styled from 'styled-components'

const CircularButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({size}) => `${0.5 * size}em`};
    height: ${({size}) => `${0.5 * size}em`};
    border: none;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.secondary};
    position: ${({position}) => position};
    z-index: 100;
    cursor: pointer;
    outline: none;
    transition: all .2s;
`

CircularButton.defaultProps = {
    theme: {
        colors: {
            secondary: 'gray'
        }
    },
    position: 'relative',
    size: 7
}

export default CircularButton
import styled from 'styled-components'

const DialogHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding: ${({ size }) => `${size * 0.5}em ${size * 1}em`};
`

DialogHeader.defaultProps = {
    size: 1.5
}

export default DialogHeader
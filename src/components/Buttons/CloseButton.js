import styled from 'styled-components'

import CircularButton from './CircularButton'

const DialogCloseButton = styled(CircularButton)`
    color: white;
    font-weight: 500;
    font-size: 1.2em;
`

DialogCloseButton.defaultProps = {
    size: 5.5
}

export default DialogCloseButton
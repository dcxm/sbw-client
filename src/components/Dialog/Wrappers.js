import styled from 'styled-components'

const FixedWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: ${({open}) => open ? 'rgba(0, 0, 0, 0.6)': 'none'};
    top: 0%;
    z-index: 101;
`

FixedWrapper.defaultProps = {
    open: false
}

const AbsoluteWrapper = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 5%;
    width: 80%;
    height: 90%;
`

const Wrapper = styled.div`
    display: flex;
    z-index: 2;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: ${({border}) => border ? border : "1em"} ;
    background-color: white;
`

const ContentWrapper = styled.div`
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
`

export {
    Wrapper, FixedWrapper, AbsoluteWrapper, ContentWrapper
}
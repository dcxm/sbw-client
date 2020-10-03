import React, {useState} from 'react'
import './App.css'

import Navbar from './containers/Navbar'
import Main from './components/Main'
import Card from './components/Card/Card'
import Header from './components/Header'
import Dialog from './components/Dialog'

import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from './theme'

import { ReactComponent as CollapseIcon } from './icons/angle-up-solid.svg'

const GlobalStyle = createGlobalStyle`
  ::selection {
    background-color: ${({ theme }) => theme.colors.selection ? theme.colors.selection : 'lightgray'};
  }
`

function App() {
  const [open, setOpen] = useState(true)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar siteTitle="SBW" collapseIcon={<CollapseIcon />} />
      <Main>
        <Header variant={'1'} style={{ marginBottom: '1em' }}>
          My writings
        </Header>
        <Card />
      </Main>
      <Dialog title="Add items" open={open} closeAction={() => setOpen(!open)}/>
    </ThemeProvider>
  );
}

export default App;

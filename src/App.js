import React, { useState } from 'react'
import './App.css'

import { Provider } from 'react-redux'
import store from './store/index'

import Routes from './Routes'
import Layout from './components/Layout'

import { BrowserRouter as Router, useLocation } from 'react-router-dom'

import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
  ::selection {
    background-color: ${({ theme }) => theme.colors.selection ? theme.colors.selection : 'lightgray'};
  }
`

function App() {

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <GlobalStyle />
          <Layout>
            <Routes />
          </Layout>
        </Provider>
      </ThemeProvider>
    </Router>
  );
}

export default App;

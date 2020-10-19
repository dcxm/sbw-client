import React, { useState } from 'react'
import './App.css'

import { Provider } from 'react-redux'
import store from './store/index'

import LoginCheck from './containers/LoginCheck'

import Routes from './Routes'
import Layout from './components/Layout'

import EditDialog from './containers/EditDialog'
import AddItemDialog from './containers/AddItemDialog'
import DeletePrompt from './containers/DeletePrompt'
import SummaryReaderDialog from './containers/SummaryReaderDialog'

import { BrowserRouter as Router } from 'react-router-dom'

import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
  ::selection {
    background-color: ${({ theme }) => theme.colors.selection ? theme.colors.selection : 'lightgray'};
  }
  .ql-editor, .ql-container {
    margin: 0 auto; 
    padding: 4em 0;
    width: 80%;
    max-width: 80%;
    min-height: 70vh;
    overflow-x: hidden;
  }
  @media (max-width: 550px) {
    .ql-editor, .ql-container {
      padding: 4em 0 2em 0;
      width: 95%;
      min-height: 70vh;
    } 
  }
  .ql-editor {
    font-size: 16px;
  }
  .ql-editor a::before {
    z-index: 1000;
  }
`

function App() {

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <GlobalStyle />
          <LoginCheck>
            <Layout>
              <Routes />
              {/* DIALOGS */}
              <AddItemDialog />
              <EditDialog />
              <DeletePrompt />
              <SummaryReaderDialog />
            </Layout>
          </LoginCheck>
        </Provider>
      </ThemeProvider>
    </Router>
  );
}

export default App;

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './utils/Themes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'

const Container = styled.div`
width:100% 
height:100%
display:flex
flex-direction: column
background :${({ theme }) => theme.bg}
color: ${({ theme }) => theme.text_primary}
overflow-x: hidden
overflow-y: hidden
transition:all 0.2s ease`;

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Container>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<Home/>} />
            </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

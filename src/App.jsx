import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

function App() {

  React.useEffect(() => {
    document.title = 'SpeakHere'
  }, [])

  return (
    <div className='min-h-[100vh] h-full bg-white flex flex-col'>
      <BrowserRouter>
        <Header />
        <main className='flex-1 w-full bg-neutralLight flex flex-col'>
          <Routes>
            <Route path="/" element={<Home />} /> 
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>  
    </div>
    );
}

export default App;

//test ssh key
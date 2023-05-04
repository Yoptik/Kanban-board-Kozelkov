import React from 'react';
import { Route, Routes } from 'react-router';
//Components
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Task from './pages/Task/Task';
//Context Tasks
import ContextProvider from './context/ContextProvider';


function App() {


    return (
        <ContextProvider>
            <div className='app'>
                <Header />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/task/:id' element={<Task />} />
                </Routes>

                <Footer />
            </div>
        </ContextProvider>

    );
}

export default App;

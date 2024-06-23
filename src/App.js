import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import News from './components/News';
import TransitionWrapper from './components/TransitionWrapper';
import Ways from './components/Ways';
import Connection from './components/Connection';

function App() {
  return <BrowserRouter>
    <title>Скорая помощь г. Барнаул</title>
    <div className='bg-gray-100 min-h-[100vh] h-full'>
      <Header />
      <TransitionWrapper>
        <Route path="/" element={<Landing />} />
        <Route path="/connection" element={<Connection />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/ways" element={<Ways />} />
      </TransitionWrapper>
    </div >

  </BrowserRouter>

}

export default App;

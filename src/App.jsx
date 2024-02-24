import React, { Suspense } from 'react';
import LandingPage from './landingPage/LandingPage';
import Loading from './landingPage/component/Loading';
import Navbar from './landingPage/component/Navbar';
import Footer from './landingPage/component/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './landingPage/Gallery';

function App() {
  return (
    <>
        <Suspense fallback={Loading}>
          <Router>
            <Navbar />
              <Routes>
                <Route path='/' element={<LandingPage />}></Route>
                <Route path='/Gallery' element={<Gallery type={"allProduk"} />}></Route>
                <Route path='/videoFacebook' element={<Gallery type={"videoFacebook"} />}></Route>
                <Route path='/instaStory' element={<Gallery type={"instaStory"} />}></Route>
                <Route path='/videoYoutube' element={<Gallery type={"videoYoutube"} />}></Route>
              </Routes>
            <Footer />
          </Router>
        </Suspense>
    </> 
  )
}

export default App

import React, { Suspense } from 'react';
import LandingPage from './landingPage/LandingPage';
import Loading from './landingPage/component/Loading';

function App() {
  return (
    <Suspense fallback={<Loading />}>
        <LandingPage />
    </Suspense>
  )
}

export default App

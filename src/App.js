import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import HookPage from './pages/HookPage';
import ReducePage from './pages/ReducePage';
import ErrorPage from './pages/ErrorPage';

import ErrorBoundaryPage from './pages/ErrorBoundaryPage';
import ErrorBoundary from './components/error/ErrorBoundary';
import SharedNavLayout from './routes/SharedNavLayout';


// import CounterInputBox from './components/counter-box/CounterInputBox';

function App() {
  return (
    // <ChakraProvider theme={theme}>
    <>
     <Routes>
      <Route path="/" element={<SharedNavLayout />}>
        <Route index element={<HomePage />} />
        <Route path="hook/counter" element={<HookPage/>}/>
        <Route path="usereducer/counter" element={<ReducePage/>}/>
        <Route path="error/errorboundary" element={<ErrorBoundary><ErrorBoundaryPage/></ErrorBoundary>}/>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
    </>

    // </ChakraProvider>
  );
}

export default App;


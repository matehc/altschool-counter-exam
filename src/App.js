import { useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Button from './components/button/Button.component';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';



import useCounter from './hooks/useCounter.hook';

import HomePage from './pages/HomePage';
import HookPage from './pages/HookPage';
import ReducePage from './pages/ReducePage';
import ErrorPage from './pages/ErrorPage';

import ErrorBoundaryPage from './pages/ErrorBoundaryPage';
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
        <Route path="/errorboundary" element={<ErrorBoundaryPage/>}/>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
    </>

    // </ChakraProvider>
  );
}

export default App;

// <Box textAlign="center" fontSize="xl">
//         <Grid minH="100vh" p={3}>
//           <ColorModeSwitcher justifySelf="flex-end" />
//           <VStack spacing={8}>
//             <Logo h="40vmin" pointerEvents="none" />
//             <Text>
//               Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
//             </Text>
//             <Link
//               color="teal.500"
//               href="https://chakra-ui.com"
//               fontSize="2xl"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Learn Chakra
//             </Link>
//           </VStack>
//         </Grid>
//       </Box>

import { useState} from 'react';
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


function App() {
  const [state, setIncrement, setDecrement, setValue] = useCounter(0);
  const [val, setVal] = useState('');

  const handleChange =(e)=> {
    e.preventDefault();
    if(e.key === 'Enter') {
      if(typeof e.target.value !== "number"){
        console.log('put a number here');
      }
      setValue(e.target.value);
    }

    setVal(e.target.value);
    
  }
  return (
    // <ChakraProvider theme={theme}>
    <>
    <div>{state}</div>
<form action="">
      <input type="text" value={val} onChange={handleChange}/>
    </form>
    <button>Increment</button>
    <button>Reset</button>
    <button>Decrement</button>
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
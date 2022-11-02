import { useEffect, useState } from 'react';
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
  const [state, counterData] = useCounter();
  const [inputValue, setInputValue] = useState('');
  const [val, setVal] = useState(0);

  useEffect(()=>{
    counterData.setValue(val);
    console.log("useEffect",state);
    
  }, [val]);

  const handleKeyUp = e => {
    try {
      console.log(e);
      const input = e.target.value;
      setInputValue(input);
      if (e.key === 'Enter') {
        console.log(inputValue);
        const num = parseInt(inputValue);
        if (!isNaN(num)) {
          setVal(num);
        } else {
          console.log('NOT A NUMBER');
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    // <ChakraProvider theme={theme}>
    <>
      <div>{state}</div>
      <form action="" onSubmit={e => e.preventDefault()}>
        <input onKeyUp={handleKeyUp} type="text" />
      </form>
      <button onClick={counterData.setIncrement}>Increment</button>
      <button onClick={counterData.reset}>Reset</button>
      <button onClick={counterData.setDecrement}>Decrement</button>
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

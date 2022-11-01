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
  const [state, counterData] = useCounter(0);
  // const {} = counterData;
  const [val, setVal] = useState('');
  console.log("set value ",typeof counterData.setValue);

  const handleKeyUp = (e) => {

   console.log(e.key, "key pressedd here");
      try {

        console.log(e);
        const input = e.target.value;
        setVal(input);
        if( e.key  === 'Enter'){
          console.log(val)
          // alert('enter pressed')
        const num = parseInt(val);
        if(!isNaN(num)) {
          counterData.setValue(num);
          console.log('num', num);
          console.log('main value i need from state',state);
        } else {
          console.log('NOT A NUMBER');
        }
      }
     } catch (e) {
        console.log(e); 
      }
    
  }
  return (
    // <ChakraProvider theme={theme}>
    <>
    <div>{val}</div>
<form action="" onSubmit={(e)=> e.preventDefault()}>
      <input onKeyDown={ handleKeyUp} type="text"/>
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
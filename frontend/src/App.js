import { Box, Button, Container, Stack, Typography } from '@mui/material';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';

import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Rigthbar from './components/Rigthbar'
import Navbar from './components/Navbar'

function App() {
  return (
    // The Basics

    // <div className="App">
    //   <Button 
    //   startIcon={<AccessibleForwardIcon />}
    //   variant="contained">Hello world</Button>

    //   <Typography variant="h1" component="h2">
    //     h1. Heading
    //   </Typography>
    // </div>
    <div>

      <Container sx={{backgroundColor:"red"}}>
        <div>dasasd</div>
        <Sidebar />
        <Feed />
        <Rigthbar />
      </Container>

      <Box>
        {/* navbar */}
        <Stack direction={'row'} spacing={2} justifyContent={'center'}>
          <Sidebar />
          <Feed />
          <Rigthbar />
        </Stack>
      </Box>
    </div>
  );
}

export default App;

import { Stack } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <footer style={{
        // position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#f0f0f0", // Add your desired background color
        padding: "25px"
    }}>
        <Stack direction={{lg:"row", md:"row", sm:"column", xs:"column"}} justifyContent={"space-between"} sx={{
            padding:"25px"
        }}>
             <Stack>Copyright &copy; All Rights Reserved by Pagume 5</Stack>    
             <Stack>Website developed with passion by Let's Go Software Solutions</Stack>    
        </Stack>
    </footer>
  )
}

export default Footer
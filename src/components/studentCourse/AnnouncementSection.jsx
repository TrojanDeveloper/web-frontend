import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const AnnouncementSection = () => {

  

  return (
    <Box
      sx={{
        marginY: 5,
        border: 2,
        padding: 2,
      }}
    >
      <Typography>Announcements</Typography>
      <Stack>
        {/* annoucements goes here */ }
      </Stack>
    </Box>
  )
}

export default AnnouncementSection
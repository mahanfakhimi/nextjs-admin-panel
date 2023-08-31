// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const FooterContent = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex' }}>
        <Typography sx={{ mr: 2 }}>
          {`© ${new Date().getFullYear()}, Made with `}
          <Box component='span' sx={{ color: 'error.main' }}>
            ❤️
          </Box>
          {` by `}
        </Typography>
        <Typography>Mahan Fakhimi</Typography>
      </Box>
    </Box>
  )
}

export default FooterContent

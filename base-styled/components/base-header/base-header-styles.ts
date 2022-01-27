import { AppBar, styled } from '@mui/material'

export const Header = styled(AppBar)<{
  position: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative'
}>(({ position }) => ({
  padding: (position !== 'fixed' && '0.75rem') || 0,
  backgroundColor: '#fff',
  '& > div': {
    width: '100%',
    padding: '0.75rem',
    margin: 0,
    minHeight: 'unset !important'
  }
}))

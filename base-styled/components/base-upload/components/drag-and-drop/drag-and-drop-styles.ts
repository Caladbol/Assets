import { IoMdCloudUpload } from 'react-icons/io'

import { styled } from '@mui/material'

export const Container = styled('div')(() => ({
  display: 'flex',
  gap: '0.75rem',
  flexDirection: 'column',
  width: '100%',
  height: 'fit-content'
}))

export const StyledLabel = styled('span')(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: '1.5rem',
  color: theme.palette.text.primary
}))

export const InputDescription = styled('span')(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 'bold',
  lineHeight: '1.5rem',
  color: theme.palette.text.primary
}))

export const DropAreaContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.5rem',
  width: '100%',
  minHeight: '10.5rem',
  height: 'fit-content',
  cursor: 'pointer',
  border: '1px dashed #D3D4D8',
  borderRadius: '4px',
  background: '#FAFAFC'
}))

export const StyledInput = styled('input')(() => ({}))

export const StyledIcon = styled(IoMdCloudUpload)(({ theme }) => ({
  color: theme.palette.text.disabled,
  fontSize: '3rem'
}))

export const Constraints = styled('span')(({ theme }) => ({
  fontSize: '0.875rem',
  fontWeight: 'normal',
  lineHeight: '1.25rem',
  color: theme.palette.text.secondary
}))

export const Preview = styled('img')(() => ({
  width: '100%',
  height: '10.5rem',
  objectFit: 'scale-down'
}))

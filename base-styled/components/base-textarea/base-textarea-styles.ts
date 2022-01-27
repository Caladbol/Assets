import { styled } from '@mui/material'

type StateProps = {
  success?: string
  warning?: string
  error?: string
  info?: string
}

export const Container = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '0.3rem'
}))

export const Label = styled('span')(({ theme }) => ({
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',
  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: '1.5rem',
  color: theme.palette.text.secondary
}))

export const Optional = styled('span')(({ theme }) => ({
  fontSize: '0.75rem',
  fontWeight: 500,
  lineHeight: '1rem',
  color: theme.palette.text.disabled
}))

export const Description = styled('span')(({ theme }) => ({
  fontSize: '0.75rem',
  fontWeight: 500,
  lineHeight: '1rem',
  color: theme.palette.text.secondary
}))

export const StyledTextArea = styled('textarea')(({ theme }) => ({
  width: '100%',
  height: '5.75rem',
  border: 'none',
  color: theme.palette.text.primary,
  background: 'transparent',
  lineHeight: '1.5rem',
  fontWeight: 400,
  fontFamily: '"Helvetica Neue LT Pro", "Helvetica", "Arial", sans-serif',
  fontSize: '1rem',
  opacity: 0.8,
  padding: '0.625rem 1rem',

  '&::placeholder': {
    color: theme.palette.text.disabled,
    fontFamily: '"Helvetica Neue LT Pro", "Helvetica", "Arial", sans-serif',
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: 'normal',
    fontStyle: 'normal'
  },

  '&:focus': {
    outline: 'none'
  }
}))

export const TextAreaContainer = styled('div')<StateProps>(
  ({ theme, success, warning, error, info }) => ({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 'fit-content',
    border: `1px solid ${theme.palette.neutral.default}`,
    backgroundColor: theme.palette.neutralActions['9'],
    color: theme.palette.text.primary,

    '&:focus-within': {
      outline: `2px solid ${theme.palette.primaryActions.active}`
    },

    [success === 'true' ? '&' : '']: {
      border: `1px solid ${theme.palette.states.success}`,

      '&:focus-within': {
        outline: `2px solid ${theme.palette.states.success}`
      }
    },
    [warning === 'true' ? '&' : '']: {
      border: `1px solid ${theme.palette.states.warning}`,

      '&:focus-within': {
        outline: `2px solid ${theme.palette.states.warning}`
      }
    },
    [error === 'true' ? '&' : '']: {
      border: `1px solid ${theme.palette.states.error}`,

      '&:focus-within': {
        outline: `2px solid ${theme.palette.states.error}`
      }
    },
    [info === 'true' ? '&' : '']: {
      border: `1px solid ${theme.palette.states.info}`,

      '&:focus-within': {
        outline: `2px solid ${theme.palette.states.info}`
      }
    }
  })
)

export const IconBefore = styled('div')(() => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '1rem'
}))
export const IconAfter = styled('div')(() => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  paddingRight: '1rem'
}))

export const Alert = styled('div')<StateProps>(
  ({ theme, success, warning, error, info }) => ({
    width: '100%',
    height: '2rem',
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
    padding: '0.375rem 0.5rem 0.375rem 1rem',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',

    [success === 'true' ? '&' : '']: {
      background: `${theme.palette.states.successBg}`,
      color: `${theme.palette.states.success}`
    },
    [warning === 'true' ? '&' : '']: {
      background: `${theme.palette.states.warningBg}`,
      color: `${theme.palette.states.warning}`
    },
    [error === 'true' ? '&' : '']: {
      background: `${theme.palette.states.errorBg}`,
      color: `${theme.palette.states.error}`
    },
    [info === 'true' ? '&' : '']: {
      background: `${theme.palette.states.infoBg}`,
      color: `${theme.palette.states.info}`
    }
  })
)

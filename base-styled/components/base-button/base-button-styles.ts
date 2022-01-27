import { styled } from '@mui/material'

export const Container = styled('div')<{
  model: 'filled' | 'ghost' | 'borderless' | 'rounded'
  stateColor: 'primary' | 'secondary' | 'neutral'
  disabled: boolean
  size: 'lg' | 'md' | 'sm'
}>(({ theme, model, stateColor, size }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',

  lineHeight:
    (size === 'sm' && '1.25rem') ||
    (size === 'md' && '1.5rem') ||
    (size === 'lg' && '1.75rem'),

  height: 'fit-content',
  maxHeight: '100%',
  fontWeight: size === 'lg' ? 600 : 500,
  fontFamily: '"Helvetica Neue LT Pro", "Helvetica", "Arial", sans-serif',

  fontSize:
    (size === 'sm' && '0.875rem') ||
    (size === 'md' && '1rem') ||
    (size === 'lg' && '1.125rem'),

  background:
    (stateColor === 'primary' && theme.palette.primaryActions.default) ||
    (stateColor === 'secondary' && theme.palette.secondaryActions.default) ||
    (stateColor === 'neutral' && theme.palette.neutral.active),

  color:
    (stateColor === 'neutral' && theme.palette.text.primary) ||
    theme.palette.neutralActions.white,

  borderRadius: (model === 'rounded' && '32px') || '4px',

  border: 'none',

  padding:
    (size === 'sm' && '0.5rem 1rem') ||
    (size === 'md' && '0.625rem 1rem') ||
    (size === 'lg' && '0.75rem 1rem'),

  '&:hover': {
    background:
      (stateColor === 'primary' && theme.palette.primaryActions.hover) ||
      (stateColor === 'secondary' && theme.palette.secondaryActions.hover) ||
      (stateColor === 'neutral' && theme.palette.neutral.hover),
    color:
      (model === ('ghost' || 'borderless') &&
        theme.palette.primaryActions.hover) ||
      theme.palette.neutralActions.white
  },

  '&:disabled, &[disabled]': {
    cursor: 'not-allowed',
    background:
      (stateColor === 'primary' && theme.palette.primaryActions.disabled) ||
      (stateColor === 'secondary' && theme.palette.secondaryActions.disabled) ||
      (stateColor === 'neutral' && theme.palette.neutral.disabled),
    color:
      (stateColor === 'neutral' && theme.palette.text.disabled) ||
      (model === ('ghost' || 'borderless') &&
        theme.palette.primaryActions.disabled) ||
      theme.palette.neutralActions.white
  },

  [model === 'ghost' ? '&' : '.undefined']: {
    background: 'transparent',

    border:
      (stateColor === 'secondary' &&
        `2px solid ${theme.palette.secondaryActions.default}`) ||
      (stateColor === 'neutral' &&
        `2px solid ${theme.palette.neutral.active}`) ||
      `2px solid ${theme.palette.primaryActions.default}`,

    color:
      (stateColor === 'secondary' && theme.palette.secondaryActions.default) ||
      (stateColor === 'neutral' && theme.palette.neutral.active) ||
      theme.palette.primaryActions.default,

    '&:hover': {
      background:
        (stateColor === 'secondary' &&
          theme.palette.secondaryActions.hover10) ||
        (stateColor === 'neutral' && theme.palette.neutral.hover10) ||
        theme.palette.primaryActions.hover10,

      color:
        (stateColor === 'secondary' && theme.palette.secondaryActions.hover) ||
        (stateColor === 'neutral' && theme.palette.neutral.hover) ||
        theme.palette.primaryActions.hover,

      border:
        (stateColor === 'secondary' &&
          `2px solid ${theme.palette.secondaryActions.hover}`) ||
        (stateColor === 'neutral' &&
          `2px solid ${theme.palette.neutral.hover}`) ||
        `2px solid ${theme.palette.primaryActions.hover}`
    },
    '&:disabled, &[disabled]': {
      background: 'transparent',

      border:
        (stateColor === 'secondary' &&
          `2px solid ${theme.palette.secondaryActions.disabled}`) ||
        (stateColor === 'neutral' &&
          `2px solid ${theme.palette.neutral.disabled}`) ||
        `2px solid ${theme.palette.primaryActions.disabled}`,

      color:
        (stateColor === 'secondary' &&
          theme.palette.secondaryActions.disabled) ||
        (stateColor === 'neutral' && theme.palette.neutral.disabled) ||
        theme.palette.primaryActions.disabled
    },

    [stateColor === 'secondary' ? '&' : '.undefined']: {
      '&:disabled, &[disabled]': {
        color: theme.palette.secondaryActions.disabled
      }
    },
    [stateColor === 'neutral' ? '&' : '.undefined']: {
      '&:disabled, &[disabled]': {
        color: theme.palette.neutral.disabled
      }
    }
  },

  [model === 'borderless' ? '&' : '.undefined']: {
    background: 'transparent',
    color: theme.palette.primaryActions.default,

    '&:hover': {
      background: theme.palette.primaryActions.hover10,
      color: theme.palette.primaryActions.hover
    },
    '&:disabled, &[disabled]': {
      background: 'transparent',
      color: theme.palette.primaryActions.disabled
    },

    [stateColor === 'secondary' ? '&' : '.undefined']: {
      color: theme.palette.secondaryActions.default,

      '&:hover': {
        background: theme.palette.secondaryActions.hover10,
        color: theme.palette.secondaryActions.hover
      },
      '&:disabled, &[disabled]': {
        color: theme.palette.secondaryActions.disabled
      }
    },
    [stateColor === 'neutral' ? '&' : '.undefined']: {
      color: theme.palette.neutral.active,

      '&:hover': {
        background: theme.palette.neutral.hover10,
        color: theme.palette.secondaryActions.hover
      },
      '&:disabled, &[disabled]': {
        color: theme.palette.secondaryActions.disabled
      }
    }
  }
}))

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

export const StyledButton = styled('button')(() => ({
  border: 'none',
  background: 'transparent',
  cursor: 'inherit',
  lineHeight: 'inherit',
  maxHeight: 'inherit',
  fontWeight: 'inherit',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  color: 'inherit'
}))

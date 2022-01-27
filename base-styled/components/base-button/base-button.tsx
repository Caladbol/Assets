import {
  Container,
  IconBefore,
  IconAfter,
  StyledButton
} from './base-button-styles'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string | React.ReactNode
  description?: string | React.ReactNode
  model?: 'filled' | 'ghost' | 'borderless' | 'rounded'
  color?: 'primary' | 'secondary' | 'neutral'
  size?: 'lg' | 'md' | 'sm'
  alertMessage?: string | React.ReactNode
  iconBefore?: React.ReactNode
  iconAfter?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLDivElement> &
    React.MouseEventHandler<HTMLButtonElement>
}

const BaseButton = ({
  iconBefore,
  iconAfter,
  model = 'filled',
  children,
  disabled,
  className,
  color = 'primary',
  size = 'md',
  onClick,
  ...props
}: Props) => {
  return (
    <Container
      model={model}
      stateColor={color}
      onClick={onClick}
      disabled={disabled}
      size={size}
      className={className}
    >
      {iconBefore && <IconBefore>{iconBefore}</IconBefore>}
      <StyledButton {...props} disabled={disabled}>
        {children}
      </StyledButton>
      {iconAfter && <IconAfter>{iconAfter}</IconAfter>}
    </Container>
  )
}

export default BaseButton

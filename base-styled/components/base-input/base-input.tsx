import React, { forwardRef } from 'react'
import { IoMdAlert } from 'react-icons/io'

import {
  Alert,
  Container,
  Description,
  Label,
  Optional,
  StyledInput,
  InputContainer,
  IconBefore,
  IconAfter
} from './base-input-styles'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string | React.ReactNode
  description?: string | React.ReactNode
  optional?: boolean
  success?: boolean
  warning?: boolean
  error?: boolean
  info?: boolean
  alertMessage?: string | React.ReactNode
  iconBefore?: React.ReactNode
  iconAfter?: React.ReactNode
}

const BaseInput: React.ForwardRefRenderFunction<HTMLInputElement, Props> = (
  {
    label,
    optional = false,
    success = false,
    warning = false,
    error = false,
    info = false,
    alertMessage,
    description,
    iconBefore,
    iconAfter,
    ...props
  },
  ref
) => {
  const stateful = [success, warning, error, info].some((state) => state)
  return (
    <Container>
      {label && (
        <Label>
          {label}
          {optional && <Optional>Optional</Optional>}
        </Label>
      )}
      {description && <Description>{description}</Description>}
      <InputContainer
        success={success.toString()}
        warning={warning.toString()}
        error={error.toString()}
        info={info.toString()}
      >
        {iconBefore && <IconBefore>{iconBefore}</IconBefore>}
        <StyledInput {...props} ref={ref} />
        {iconAfter && <IconAfter>{iconAfter}</IconAfter>}
      </InputContainer>
      {stateful && alertMessage && (
        <Alert
          success={success.toString()}
          warning={warning.toString()}
          error={error.toString()}
          info={info.toString()}
        >
          <IoMdAlert />
          {alertMessage}
        </Alert>
      )}
    </Container>
  )
}

export default forwardRef(BaseInput)

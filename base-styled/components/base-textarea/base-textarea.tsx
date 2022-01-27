import { IoMdAlert } from 'react-icons/io'

import {
  Alert,
  Container,
  Description,
  Label,
  Optional,
  StyledTextArea,
  TextAreaContainer,
  IconBefore,
  IconAfter
} from './base-textarea-styles'

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
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

const BaseTextArea = ({
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
}: Props) => {
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
      <TextAreaContainer
        success={success.toString()}
        warning={warning.toString()}
        error={error.toString()}
        info={info.toString()}
      >
        {iconBefore && <IconBefore>{iconBefore}</IconBefore>}
        <StyledTextArea {...props} />
        {iconAfter && <IconAfter>{iconAfter}</IconAfter>}
      </TextAreaContainer>
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

export default BaseTextArea

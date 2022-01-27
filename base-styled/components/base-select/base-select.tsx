import { useState } from 'react'
import ClickAwayListener from 'react-click-away-listener'
import { IoMdAlert } from 'react-icons/io'

import {
  Alert,
  Container,
  Description,
  Label,
  Optional,
  StyledSelect,
  SelectContainer,
  IconBefore,
  IconAfter,
  StyledPlaceholder,
  StyledArrow,
  StyledClear,
  DropdownMenu,
  StyledOption
} from './base-select-styles'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  options: Array<{
    value: number | string
    label: any
  }>
  label?: string | number | React.ReactNode
  description?: string | React.ReactNode
  disabled?: boolean
  placeholder?: string | number | React.ReactNode
  optional?: boolean
  success?: boolean
  warning?: boolean
  error?: boolean
  info?: boolean
  alertMessage?: string | React.ReactNode
  iconBefore?: React.ReactNode
  iconAfter?: React.ReactNode
  allowClear?: boolean
}

const BaseSelect = ({
  options,
  placeholder = options[0].label || 'Select...',
  disabled = options.length < 2,
  defaultValue = '',
  label,
  allowClear,
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
  const [value, setValue] = useState(defaultValue)
  const [open, setOpen] = useState(false)

  const stateful = [success, warning, error, info].some((state) => state)

  const handleToggleMenu = () => {
    if (!disabled) {
      setOpen((state) => !state)
    }
  }
  const handleCloseMenu = () => setOpen(false)

  const handleChoice = (e: any) => {
    setValue(e.target.value)
    handleCloseMenu()
  }

  const handleClear = () => setValue('')
  return (
    <ClickAwayListener onClickAway={handleCloseMenu} mouseEvent='click'>
      <Container>
        {label && (
          <Label>
            {label}
            {optional && <Optional>Optional</Optional>}
          </Label>
        )}
        {description && <Description>{description}</Description>}
        <SelectContainer
          success={success.toString()}
          warning={warning.toString()}
          error={error.toString()}
          info={info.toString()}
        >
          {iconBefore && <IconBefore>{iconBefore}</IconBefore>}
          <StyledSelect {...props} onClick={handleToggleMenu}>
            {!value && <StyledPlaceholder>{placeholder}</StyledPlaceholder>}
            {value && (
              <span>
                {
                  options[options.findIndex((option) => option.value === value)]
                    .label
                }
              </span>
            )}
          </StyledSelect>
          {iconAfter && <IconAfter>{iconAfter}</IconAfter>}
          {allowClear && <StyledClear onClick={handleClear} />}
          <StyledArrow onClick={handleToggleMenu} open={open} />
          {open && (
            <DropdownMenu>
              {options.map((option, index) => (
                <StyledOption
                  key={`${option.value}-${index}`}
                  value={option.value}
                  onClick={handleChoice}
                >
                  {option.label}
                </StyledOption>
              ))}
            </DropdownMenu>
          )}
        </SelectContainer>
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
    </ClickAwayListener>
  )
}

export default BaseSelect

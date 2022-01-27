import { AiOutlineSearch } from 'react-icons/ai'

import { InputBaseProps } from '@mui/material'

import {
  StyledSearchBar,
  StyledIconWrapper,
  StyledInputField
} from './base-search-bar-styles'

type Props = InputBaseProps & {}

const BaseSearchBar = ({ placeholder, ...props }: Props) => {
  return (
    <StyledSearchBar>
      <StyledIconWrapper>
        <AiOutlineSearch />
      </StyledIconWrapper>
      <StyledInputField
        {...props}
        placeholder={placeholder}
        inputProps={{ 'aria-label': 'search' }}
      />
    </StyledSearchBar>
  )
}

export default BaseSearchBar

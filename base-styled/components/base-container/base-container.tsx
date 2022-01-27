import { ContainerProps } from '@mui/material'

import { StyledContainer } from './base-container-styles'

type Props = ContainerProps & {}

const BaseContainer = ({ children, ...props }: Props) => {
  return <StyledContainer {...props}>{children}</StyledContainer>
}

export default BaseContainer

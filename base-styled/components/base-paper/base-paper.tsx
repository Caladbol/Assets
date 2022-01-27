import { Paper, PaperProps } from '@mui/material'

import { Container } from './base-paper-styles'

type Props = PaperProps & {}

const BasePaper = ({ children, className, ...rest }: Props) => {
  return (
    <Container className={className}>
      <Paper {...rest}>{children}</Paper>
    </Container>
  )
}

export default BasePaper

import { AppBarProps, Toolbar } from '@mui/material'

import { Header } from './base-header-styles'

type Props = AppBarProps & {}

const BaseHeader = ({ children, className, position, ...props }: Props) => {
  return (
    <Header
      className={position !== 'fixed' ? className : ''}
      {...props}
      position={position}
    >
      {position === 'fixed' && (
        <Toolbar className={className}>{children}</Toolbar>
      )}
      {position !== 'fixed' && children}
    </Header>
  )
}

export default BaseHeader

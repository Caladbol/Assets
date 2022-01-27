import { MimeTypes } from '~/app/presentation/components/base-styled/types'

import { DragNDrop } from './components'

type Props = {
  drag?: boolean
  label?: React.ReactNode
  supportedFiles?: MimeTypes[]
  maxSize?: string
  inputDescription?: string | React.ReactNode
}

const BaseUpload = ({ drag = false, ...props }: Props) => {
  if (drag) return <DragNDrop {...props} />
  return <></>
}

export default BaseUpload

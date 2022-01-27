import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

import { getMimeExtension } from '~/app/presentation/components/base-styled/helpers'
import { MimeTypes } from '~/app/presentation/components/base-styled/types'

import {
  Constraints,
  Container,
  DropAreaContainer,
  InputDescription,
  Preview,
  StyledInput,
  StyledIcon,
  StyledLabel
} from './drag-and-drop-styles'

type Props = {
  label?: React.ReactNode
  supportedFiles?: MimeTypes[]
  maxSize?: string
  inputDescription?: string | React.ReactNode
}

const DragNDrop = ({
  label,
  supportedFiles,
  maxSize,
  inputDescription
}: Props) => {
  const [files, setFiles] = useState([])
  const onDrop = useCallback((files) => {
    setFiles(
      files.map((file: File) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    )
  }, [])
  const extensions: string[] = []

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: extensions
  })

  supportedFiles.forEach((mime) => extensions.push(getMimeExtension(mime)))

  return (
    <Container>
      <StyledLabel>{label}</StyledLabel>
      <DropAreaContainer {...getRootProps()}>
        <StyledInput {...getInputProps()} />
        {files.length === 0 && (
          <>
            <StyledIcon />
            <InputDescription>{inputDescription}</InputDescription>
          </>
        )}
        {files.length > 0 && (
          <>
            <Preview src={files[0]?.preview} />
          </>
        )}
      </DropAreaContainer>
      <Constraints>
        {supportedFiles.length > 0 &&
          `File types supported: ${supportedFiles.join(', ')}. `}
        {maxSize && `Max size: ${maxSize} MB. `}
      </Constraints>
    </Container>
  )
}

export default DragNDrop

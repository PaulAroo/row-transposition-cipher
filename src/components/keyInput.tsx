import { InputGroup, Input, InputRightElement, Button } from '@chakra-ui/react'
import React from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export function KeyInput({
  onKeyChange,
}: {
  onKeyChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup w={'fit-content'}>
      <Input
        type={show ? 'text' : 'password'}
        placeholder={`e.g "hack"`}
        _placeholder={{
          opacity: 0.4,
          fontStyle: 'italic',
        }}
        onChange={onKeyChange}
      />
      <InputRightElement>
        <Button onClick={handleClick}>
          {show ? <ViewIcon /> : <ViewOffIcon />}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

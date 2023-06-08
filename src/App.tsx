import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import ColorModeToggle from './components/colorModeToggle'
import { KeyInput } from './components/keyInput'
import { useState } from 'react'

function App() {
  const [plain_text_value, setPlainTextValue] = useState('')
  const [cipher_text_value, setCipherTextValue] = useState('')
  const [keyValue, setKeyValue] = useState('')

  const handlePlainTextInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPlainTextValue(e.target.value)
  }
  const handleCipherTextInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCipherTextValue(e.target.value)
  }

  const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyValue(e.target.value)
  }

  return (
    <Container pt={'2.5'}>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Heading as={'h1'} size={'lg'}>
          Row Transposition Cipher
        </Heading>
        <ColorModeToggle />
      </Flex>
      <VStack mt={'10'} spacing={'14'}>
        <FormControl width={'full'} display={'flex'} flexDir={'column'}>
          <FormLabel>Plain text</FormLabel>
          <Textarea
            resize={'vertical'}
            variant={'filled'}
            placeholder={`e.g "winter is coming"`}
            _placeholder={{
              opacity: 0.4,
              fontStyle: 'italic',
            }}
            value={plain_text_value}
            onChange={handlePlainTextInputChange}
          />
          <Button
            isDisabled={!plain_text_value.length || !keyValue.length}
            alignSelf={'flex-end'}
            mt={'4'}
            variant={'outline'}
            type="submit"
            colorScheme="blue"
            size={'sm'}
          >
            encrypt
          </Button>
        </FormControl>
        <FormControl width={'full'}>
          <FormLabel>Key</FormLabel>
          <KeyInput onKeyChange={handleKeyChange} />
        </FormControl>
        <FormControl width={'full'} display={'flex'} flexDir={'column'}>
          <FormLabel>Cipher text</FormLabel>
          <Textarea
            value={cipher_text_value}
            onChange={handleCipherTextInputChange}
            resize={'vertical'}
            variant={'filled'}
            placeholder={`e.g "sd_srhgg_sdqewsd_s"`}
            _placeholder={{
              opacity: 0.4,
              fontStyle: 'italic',
            }}
          />
          <Button
            isDisabled={!cipher_text_value.length || !keyValue.length}
            alignSelf={'flex-end'}
            mt={'4'}
            variant={'outline'}
            type="submit"
            colorScheme="blue"
            size={'sm'}
          >
            decrypt
          </Button>
        </FormControl>
      </VStack>
    </Container>
  )
}

export default App

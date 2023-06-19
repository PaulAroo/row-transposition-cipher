import {
  AspectRatio,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Textarea,
  VStack,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'

import { decrypt, encrypt, remove_duplicate_chars } from './utils/transposition'
import ColorModeToggle from './components/colorModeToggle'
import { KeyInput } from './components/keyInput'

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

  const handleEncrption = () => {
    setKeyValue(remove_duplicate_chars(keyValue))
    const cipher_text = encrypt(plain_text_value, keyValue)
    setCipherTextValue(cipher_text)
    setPlainTextValue('')
  }
  const handleDecryption = () => {
    const plain_text = decrypt(cipher_text_value, keyValue)
    setPlainTextValue(plain_text)
    setCipherTextValue('')
  }

  return (
    <Container pt={'6'}>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Heading as={'h1'} size={'lg'}>
          Row Transposition Cipher
        </Heading>
        <ColorModeToggle />
      </Flex>
      <VStack mt={'10'} spacing={'14'}>
        <Text>
          A row transposition cipher is a type of transposition cipher where the
          letters of a message are rearranged by writing them out in rows and
          then reading the ciphertext by columns. It involves permuting the
          order of the columns while keeping the rows fixed
        </Text>
        <FormControl width={'full'} display={'flex'} flexDir={'column'}>
          <FormLabel>Plain text</FormLabel>
          <Textarea
            resize={'vertical'}
            variant={'filled'}
            placeholder={`e.g "winter is coming"`}
            _placeholder={{
              opacity: 0.6,
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
            onClick={handleEncrption}
          >
            encrypt
          </Button>
        </FormControl>
        <FormControl width={'full'}>
          <FormLabel>Key</FormLabel>
          <KeyInput onKeyChange={handleKeyChange} keyValue={keyValue} />
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
              opacity: 0.6,
              fontStyle: 'italic',
            }}
            isDisabled
            _disabled={{
              opacity: 1,
              cursor: 'not-allowed',
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
            onClick={handleDecryption}
          >
            decrypt
          </Button>
        </FormControl>
        <AspectRatio mt={8} w="full" maxW="560px" ratio={16 / 9}>
          <iframe
            title="Row transposition cipher technique"
            src="https://www.youtube.com/embed/cPQXaYUMOjQ"
            allowFullScreen
          />
        </AspectRatio>
      </VStack>
    </Container>
  )
}

export default App

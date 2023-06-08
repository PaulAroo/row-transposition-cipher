export function encrypt(plain_text: string, k: string): string {
  const key: string = k.split(' ').join()
  const sorted_key = key.split('').sort()

  const row_length = key.length
  const clean_plain_text = plain_text.split(' ').join('_')
  const col_length = Math.ceil(clean_plain_text.length / key.length)

  const matrix: string[] = []
  let offset = 0
  for (let i = 0; i < col_length; i++) {
    matrix.push(clean_plain_text.slice(offset, offset + row_length))
    offset += row_length
  }

  const encr_text: string[] = []
  for (const k of sorted_key) {
    let temp = ''
    for (const r of matrix) {
      temp += r.charAt(key.indexOf(k))
    }
    encr_text.push(temp)
  }

  return encr_text.join('')
}

export function decrypt(cipher_text: string, k: string): string {
  const key: string = k.split(' ').join()
  const sorted_key = key.split('').sort()
  const col_length = Math.ceil(cipher_text.length / key.length)

  const matrix: string[] = []
  let offset = 0
  for (let i = 0; i < key.length; i++) {
    matrix.push(cipher_text.slice(offset, offset + col_length))
    offset += col_length
  }

  let plain_text = ''
  for (let i = 0; i < col_length; i++) {
    for (const k of key) {
      plain_text += matrix[sorted_key.indexOf(k)].charAt(i)
    }
  }

  return plain_text.split('_').join(' ')
}

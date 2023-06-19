function remove_duplicate_chars(str: string) {
  const deduped_arr = [...new Set(str.split(''))]
  return deduped_arr.join('')
}

function clean_white_space(str: string, separator?: string) {
  return str.split(' ').join(separator)
}

export function encrypt(plain_text: string, k: string): string {
  const key: string = remove_duplicate_chars(clean_white_space(k, ''))
  const sorted_key = key.split('').sort()

  const row_length = key.length
  const clean_plain_text = clean_white_space(plain_text, '_')
  const col_length = Math.ceil(clean_plain_text.length / key.length)

  const matrix: string[] = []
  let offset = 0
  for (let i = 0; i < col_length; i++) {
    let slice = clean_plain_text.slice(offset, offset + row_length)
    if (slice.length < key.length) {
      const white_space = ' '
      slice += white_space.repeat(key.length - slice.length)
    }
    matrix.push(slice)
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
  const key: string = remove_duplicate_chars(clean_white_space(k, ''))
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

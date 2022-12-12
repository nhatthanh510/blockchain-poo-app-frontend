export const formatAddress = (address: string) => {
  if (!address) return ''
  return address.substring(0, 6) + '...' + address.substring(address.length - 6)
}

export const getIpfsUrl = (tokenURI: string) => {
  if (!tokenURI) return ''
  return tokenURI.replace('ipfs://', 'https://ipfs.io/ipfs/')
}

export const copyToClipboard = (text: string) =>
  navigator.clipboard.writeText(text)

export const formatNumberWithZero = (number: number) => {
  if (number < 10) {
    return '0' + number
  }
  return number
}

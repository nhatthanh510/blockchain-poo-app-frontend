import usePopupStore from '@/store/popup'
import React from 'react'

export default function CloseBtn() {
  const setOpen = usePopupStore((state: any) => state.setOpen)
  const setContent = usePopupStore((state: any) => state.setContent)

  const handleClosePopup = () => {
    setOpen(false)
    setContent(null)
  }
  return (
    <button className='btn-sm btn mt-5' onClick={handleClosePopup}>
      Close
    </button>
  )
}

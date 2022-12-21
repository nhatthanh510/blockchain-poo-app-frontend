import create from 'zustand'

const usePopupStore = create((set) => ({
  open: false,
  setOpen: (state: boolean) => set(() => ({ open: state })),
  content: '',
  setContent: (state: any) => set(() => ({ content: state })),
}))

export default usePopupStore

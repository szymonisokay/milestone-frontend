import { create } from 'zustand'

type ModalType = 'add-project' | 'manage-task'

type ModalStore<T> = {
	type: ModalType | null
	isOpen: boolean
	data?: T
	onOpen: <T>(type: ModalType, data?: T) => void
	onClose: () => void
}

const useModalStore = create<ModalStore<unknown>>((set) => ({
	type: null,
	data: undefined,
	isOpen: false,
	onOpen: <T>(type: ModalType, data?: T) => set({ type, data, isOpen: true }),
	onClose: () => set({ type: null, data: undefined, isOpen: false }),
}))

export const useModal = useModalStore as {
	<T>(): ModalStore<T>
	<T, U>(selector: (s: ModalStore<T>) => U): U
}

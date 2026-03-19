let _openModal: (() => void) | null = null;

export function registerModal(cb: () => void) {
  _openModal = cb;
}

export function unregisterModal() {
  _openModal = null;
}

export function openInterestModal() {
  _openModal?.();
}

/**
 * ATLAS 2.0 — TOAST NOTIFICATION COMPONENT
 */

let toastTimeout = null;

export function showToast(message, duration = 3000) {
  const toast = document.getElementById('toast-pill');
  if (!toast) return;

  if (toastTimeout) {
    clearTimeout(toastTimeout);
    toastTimeout = null;
  }

  toast.textContent = message;
  toast.classList.add('is-visible');

  toastTimeout = setTimeout(() => {
    toast.classList.remove('is-visible');
    toastTimeout = null;
  }, duration);
}

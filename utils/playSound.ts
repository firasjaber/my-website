export const playClick = () => {
  if (typeof window === 'undefined') {
    return;
  }

  void new Audio('/click.mp3').play().catch(() => null);
};

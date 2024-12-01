export const outset = 'calc(var(--tw-rounded-out) * -1)';

export const baseStyles = {
  width: 'var(--tw-rounded-out)',
  position: 'absolute',
  background: 'inherit',
  backgroundColor: 'inherit',
  aspectRatio: '1',
  maskImage: 'radial-gradient(100% 100% at center, transparent calc(50% - 0.25px), black calc(50% + 0.25px))',
  maskSize: '200% 200%',
  maskPosition: '100% 100%',
  pointerEvents: 'none',
  display: 'none',
  overflow: 'hidden',
} as const;
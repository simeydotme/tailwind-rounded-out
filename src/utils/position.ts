export type Position = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
};

export const positionVariants = {
  bottom: {
    top: 'auto',
    bottom: '0',
  },
  top: {
    top: '0',
    bottom: 'auto',
  },
  left: {
    left: '0',
    right: 'auto',
  },
  right: {
    left: 'auto',
    right: '0',
  }
} as const;

export const directions = [
  '', 'b', 'bl', 'br', 't', 'tl', 'tr',
  'l', 'lt', 'lb', 'r', 'rt', 'rb'
];
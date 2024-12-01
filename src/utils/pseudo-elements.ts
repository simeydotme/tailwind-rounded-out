import { Position } from './position';
import { baseStyles } from './styles';

type MaskPosition = {
  before?: string;
  after?: string;
};

type PseudoElements = {
  before?: Position;
  after?: Position;
};

export const createPseudoElements = (positions: PseudoElements, maskPositions: MaskPosition) => {
  const styles: Record<string, any> = {};

  if (positions.before) {
    styles['&::before'] = {
      ...baseStyles,
      ...positions.before,
      maskPosition: maskPositions.before,
      content: '""',
      display: 'block'
    };
  }

  if (positions.after) {
    styles['&::after'] = {
      ...baseStyles,
      ...positions.after,
      maskPosition: maskPositions.after,
      content: '""',
      display: 'block'
    };
  }

  return styles;
};
import type { PluginAPI } from 'tailwindcss/types/config';
import { Position, positionVariants } from './position';
import { outset } from './styles';
import { createPseudoElements } from './pseudo-elements';

type ThemeFunction = PluginAPI['theme'];

type RadiusObject = {
  [key: string]: string;
  DEFAULT: string;
};

type DirectionalVariant = {
  positions: {
    before?: Position;
    after?: Position;
  };
  maskPositions: {
    before?: string;
    after?: string;
  };
};

const getDirectionalConfig = (direction: string): DirectionalVariant => {
  const variants: Record<string, DirectionalVariant> = {
    '': {
      positions: {
        before: { ...positionVariants.bottom, left: outset },
        after: { ...positionVariants.bottom, right: outset }
      },
      maskPositions: { before: '100% 100%', after: '0% 100%' }
    },
    'b': {
      positions: {
        before: { ...positionVariants.bottom, left: outset },
        after: { ...positionVariants.bottom, right: outset }
      },
      maskPositions: { before: '100% 100%', after: '0% 100%' }
    },
    'bl': {
      positions: {
        before: { ...positionVariants.bottom, left: outset }
      },
      maskPositions: { before: '100% 100%' }
    },
    'br': {
      positions: {
        after: { ...positionVariants.bottom, right: outset }
      },
      maskPositions: { after: '0% 100%' }
    },
    't': {
      positions: {
        before: { ...positionVariants.top, left: outset },
        after: { ...positionVariants.top, right: outset }
      },
      maskPositions: { before: '100% 0%', after: '0% 0%' }
    },
    'tl': {
      positions: {
        before: { ...positionVariants.top, left: outset }
      },
      maskPositions: { before: '100% 0%' }
    },
    'tr': {
      positions: {
        after: { ...positionVariants.top, right: outset }
      },
      maskPositions: { after: '0% 0%' }
    },
    'l': {
      positions: {
        before: { ...positionVariants.left, top: outset },
        after: { ...positionVariants.left, bottom: outset }
      },
      maskPositions: { before: '0% 100%', after: '0% 0%' }
    },
    'lt': {
      positions: {
        before: { ...positionVariants.left, top: outset }
      },
      maskPositions: { before: '0% 100%' }
    },
    'lb': {
      positions: {
        after: { ...positionVariants.left, bottom: outset }
      },
      maskPositions: { after: '0% 0%' }
    },
    'r': {
      positions: {
        before: { ...positionVariants.right, top: outset },
        after: { ...positionVariants.right, bottom: outset }
      },
      maskPositions: { before: '100% 100%', after: '100% 0%' }
    },
    'rt': {
      positions: {
        before: { ...positionVariants.right, top: outset }
      },
      maskPositions: { before: '100% 100%' }
    },
    'rb': {
      positions: {
        after: { ...positionVariants.right, bottom: outset }
      },
      maskPositions: { after: '100% 0%' }
    }
  };

  return variants[direction];
};

export const createDirectionalVariant = (direction: string, theme: ThemeFunction) => {
  const config = getDirectionalConfig(direction);
  if (!config) return {};

  const inheritedRadiuses = { ...theme<RadiusObject>('borderRadius') };
  delete inheritedRadiuses.full;
  
  const borderRadiuses = {
    ...inheritedRadiuses,
    ...theme<RadiusObject>('roundedOut', { DEFAULT: '0.5rem' })
  } as RadiusObject;

  return {
    ...(direction ? {} : {
      '.rounded-out': {
        '--tw-rounded-out': borderRadiuses.DEFAULT,
        ...createPseudoElements(config.positions, config.maskPositions)
      }
    }),
    ...Object.entries(borderRadiuses).reduce((acc, [size, value]) => ({
      ...acc,
      [`.rounded-out${direction ? `-${direction}` : ''}${size === 'DEFAULT' ? '' : `-${size}`}`]: {
        '--tw-rounded-out': value,
        ...createPseudoElements(config.positions, config.maskPositions)
      }
    }), {})
  };
};

export const createDynamicDirectionalVariant = (direction: string, value: string) => {
  const config = getDirectionalConfig(direction);
  if (!config) return {};

  return {
    '--tw-rounded-out': value,
    ...createPseudoElements(config.positions, config.maskPositions)
  };
};
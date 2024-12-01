import type { PluginAPI } from 'tailwindcss/types/config';
import { createDirectionalVariant, createDynamicDirectionalVariant } from '../utils/variants';
import { directions } from '../utils/position';

type ThemeFunction = PluginAPI['theme'];
type MatchComponentsFunction = PluginAPI['matchComponents'];

export const createComponents = (theme: ThemeFunction) => {
    return directions.reduce((acc, direction) => ({
    ...acc,
    ...createDirectionalVariant(direction, theme)
  }), {});
};

export const createDynamicComponents = (matchComponents: MatchComponentsFunction, theme: ThemeFunction) => {

  directions.forEach(direction => {
    const prefix = direction ? `-${direction}` : '';
    
    matchComponents(
      {
        [`rounded-out${prefix}`]: (value) => createDynamicDirectionalVariant(direction, value)
      },
      {
        values: theme('roundedOut'),
        type: ['length', 'any']
      }
    );
  });
};
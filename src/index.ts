import plugin from 'tailwindcss/plugin';
import { createComponents, createDynamicComponents } from './components/rounded-out';

export default plugin(({ addComponents, matchComponents, theme }) => {
  // Static components
  addComponents(createComponents(theme));
  
  // Dynamic components
  createDynamicComponents(matchComponents, theme);
});
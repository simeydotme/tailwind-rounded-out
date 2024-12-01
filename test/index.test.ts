import plugin from '../src/index';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';

const generatePluginCss = async () => {
  const result = await postcss([
    tailwindcss({
      content: [{
        raw: `
          <div class="rounded-out"></div>
          <div class="rounded-out-lg"></div>
          <div class="rounded-out-t"></div>
          <div class="rounded-out-b-xl"></div>
        `
      }],
      plugins: [plugin],
    }),
  ]).process('@tailwind components;', {
    from: undefined,
  });

  return result.css;
};

describe('tailwind-rounded-out plugin', () => {
  it('generates rounded-out utility classes', async () => {
    const css = await generatePluginCss();
    expect(css).toContain('.rounded-out');
    expect(css).toContain('.rounded-out-lg');
    expect(css).toContain('.rounded-out-t');
    expect(css).toContain('.rounded-out-b-xl');
  });
});
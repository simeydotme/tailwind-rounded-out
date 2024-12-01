# Getting Started

Tailwind Rounded Out is a plugin that adds outer-rounded corner utilities to your Tailwind CSS project. Unlike traditional border-radius that curves inward, this plugin creates outward-curved corners that inherit the background properties of the element.

## Features

- Outward-curved corners
- Background inheritance
- Multiple size variants
- Directional control
- Compatible with gradients and images

[IMAGE PLACEHOLDER: Comparison between regular border-radius and rounded-out]

## Quick Start

1. Install the plugin:

```bash
npm install tailwind-rounded-out
```

2. Add it to your `tailwind.config.js`:

```js
module.exports = {
  // ...
  plugins: [
    require('tailwind-rounded-out')
  ],
}
```

3. Use in your HTML:

```html
<div class="rounded-out-lg bg-blue-500">
  Outer rounded corners!
</div>
```

[IMAGE PLACEHOLDER: Basic example output]
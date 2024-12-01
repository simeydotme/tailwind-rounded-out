# Tailwind CSS Component Plugin

A collection of reusable Tailwind CSS components that provides a set of pre-built, customizable components.

## Installation

```bash
npm install tailwind-component-plugin
```

## Usage

Add the plugin to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    // ...
  ],
  theme: {
    // ...
  },
  plugins: [
    require('tailwind-component-plugin'),
  ],
}
```

## Available Components

### Cards

```html
<div class="card">
  <div class="card-header">Card Header</div>
  <div class="card-body">Card Content</div>
  <div class="card-footer">Card Footer</div>
</div>
```

## Development

1. Install dependencies:
```bash
npm install
```

2. Run tests:
```bash
npm test
```

3. Build the plugin:
```bash
npm run build
```

## License

MIT
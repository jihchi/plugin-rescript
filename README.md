# @jihchi/plugin-rescript

[![npm package][npm-package-shield]][npm-package-url]
[![bundlephobia size][bundlephobia-size-shield]][bundlephobia-size-url]
![npm download per month][npm-download-shield]
![npm license][npm-licence-shield]

This plugin adds ReScript to your Snowpack project.

### Install

```
npm install --save-dev rescript
npm install --save-dev @jihchi/plugin-rescript
```

Then add `@jihchi/plugin-rescript` to `snowpack.config.js`:

or to `snowpack.config.js`:

```js
module.exports = {
  plugins: [
    [
      '@jihchi/plugin-rescript',
      {
        /* see "Plugin Options" below */
      },
    ],
  ],
};
```

Once added to the configuration, `@jihchi/plugin-rescript` will run automatically on `snowpack dev` and `snowpack build`.

### Plugin Options

| Name     | Type                      | Description                                                  |
| :------- | :------------------------ | :----------------------------------------------------------- |
| `output` | `"stream" or "dashboard"` | (optional) Set how the output should be recorded during dev. |

[npm-package-shield]: https://img.shields.io/npm/v/@jihchi/plugin-rescript
[npm-package-url]: https://www.npmjs.com/package/@jihchi/plugin-rescript
[npm-download-shield]: https://img.shields.io/npm/dm/@jihchi/plugin-rescript
[npm-licence-shield]: https://img.shields.io/npm/l/@jihchi/plugin-rescript
[bundlephobia-size-shield]: https://img.shields.io/bundlephobia/min/@jihchi/plugin-rescript
[bundlephobia-size-url]: https://bundlephobia.com/package/@jihchi/plugin-rescript

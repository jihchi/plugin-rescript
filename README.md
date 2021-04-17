# @jihchi/plugin-rescript

This plugin adds ReScript to your Snowpack project.

### Install

```
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

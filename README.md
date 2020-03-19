# Belarusian Messages for React-Admin

[![npm](https://img.shields.io/npm/v/ra-language-belarusian.svg)](https://npmjs.org/package/ra-language-belarusian)
[![npm downloads](https://img.shields.io/npm/dm/ra-language-belarusian.svg)](https://www.npmjs.com/package/ra-language-belarusian)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/ra-language-belarusian.svg)](https://bundlephobia.com/result?p=ra-language-belarusian)

Belarusian messages for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.

## Installation

```sh
npm install --save ra-language-belarusian
```

## Usage

```js
import belarusianMessages from 'ra-language-belarusian';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const messages = {
    'be': belarusianMessages,
};
const i18nProvider = polyglotI18nProvider(locale => messages[locale]);

<Admin locale="be" i18nProvider={i18nProvider}>
  ...
</Admin>
```

## License

This translation is licensed under the [MIT Licence](LICENSE).

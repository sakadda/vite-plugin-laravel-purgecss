# vite-plugin-laravel-purgecss
This [Vite](https://github.com/vitejs/vite) plugin purges CSS based on Blade templats output using [PurgeCSS](https://github.com/FullHuman/purgecss).

## Install
**Yarn**
```
yarn add vite-plugin-laravel-purgecss -D
```
or **npm**
```
npm i vite-plugin-laravel-purgecss --save-dev
```

## Usage
### Configuration
Use plugin in your Vite config (`vite.config.ts`)
```
import purge from 'vite-plugin-laravel-purgecss'

export default {
    plugins: [
        purge(),
    ]
}
```

## Options

| Parameter | Type  | Description |
| ----------- | -----------  | ----------- |
| safeList | `UserDefinedSafelist` | Check [available safelist options in PurgeCSS docs](https://purgecss.com/configuration.html#options).

# v-history-path

<h3>A lightweight <a href="http://vuejs.org" target="_blank">Vue 3</a> component for the 🐍 snake history path effect. It takes in any custom component and joins them with somewhat customizable arrows.</h3>

&nbsp;

Demo: <a href="https://stackblitz.com/edit/vitejs-vite-matcje?file=src%2FApp.vue" target="_blank">StackBlitz</a>

&nbsp;

https://github.com/xon52/v-history-path/assets/30713944/c25227c3-301b-454d-bb29-e5bd7db03a8f

&nbsp;

## Usage
Install: &nbsp;&nbsp; `npm i v-history-path`

```js
import VHistoryPath from 'v-history-path'
```

```html
<VHistoryPath
  :items="items"
  :item-height="100"
  :item-width="200"
  :item-gap="40"
  :path-width="8"
  :path-color="grey"
  v-slot="{ item }"
>
  <YourCustomComponent :iterated-item="item" />
</VHistoryPath>
```

&nbsp;

### Props
- items : `Array<T>`
- itemHeight: `number`
- itemWidth: `number`
- itemGap: `number`
- pathWidth: `number`
- pathColor: `string`

### Scoped Slot Props
- item : `<T>`

&nbsp;

## Contribution

Very happy for improvements - this was just something I needed and I thought would be interesting to make reusable. Submit a PR 🚀.

## License

This project is licensed under the MIT License.

# v-history-path

### A lightweight [Vue3](http://vuejs.org) component for the 🐍 **snake history path** effect. It takes in any custom component and joins them with somewhat customizable arrows.

&nbsp;

<figure class="video_container">
  <video controls="true" allowfullscreen="true" poster="./demo/readme/v-history-path.png">
    <source src="./demo/readme/v-history-path demo.mp4" type="video/mp4">
  </video>
</figure>

&nbsp;

## Usage
Install: &nbsp;&nbsp; `npm i v-history-path`

```js
import import VHistoryPath from 'v-history-path'
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
- **items** : `Array<T>`
- **itemHeight**: `number`
- **itemWidth**: `number`
- **itemGap**: `number`
- **pathWidth**: `number`
- **pathColor**: `string`

### Scoped Slot Props
- **item** : `<T>`

&nbsp;

## Contribution

Very happy for improvements - this was just something I needed and I thought would be interesting to make reusable. Submit a PR 🚀

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

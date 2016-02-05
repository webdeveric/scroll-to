# Scroll To

Scroll to an element.

## Example Usage

```javascript
import { scrollTo } from 'scroll-to';

scrollTo(
  '#some-element',
  {
    offset: 0,
    duration: 1000,
    complete: function() {
      // Do something after scrolling
    }
  }
);
```

```html
<a href="#some-element"
  data-scroll-to="#some-element"
  data-scroll-duration="1000"
  data-scroll-offset="0"
>Click Me</a>
```

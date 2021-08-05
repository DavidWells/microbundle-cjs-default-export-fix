# Microbundle example to preserve normal default export in CJS

> TLDR - CJS build separately with different file that uses Object.assign to make the default import work

```js
const defaultFunc = require('my-package')
// instead of defaultFunc.default 

defaultFunc() // works!
```

## Background

https://github.com/developit/microbundle/issues/712

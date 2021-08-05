# Microbundle example to preserve normal default export in CJS



```js
const defaultFunc = require('my-package')
// instead of defaultFunc.default 

defaultFunc() // works!
```
# Microbundle example to preserve normal default export in CJS

> TLDR - CJS build separately with different file that uses Object.assign to make the default import work

```diff
- const defaultFunc = require('my-package').default
+ const defaultFunc = require('my-package')

defaultFunc() // yay!
```

## Background

https://github.com/developit/microbundle/issues/712

# Microbundle example to preserve normal default export in CJS

> TLDR - Use Object.assign for CJS build to make the default import work in require()

```diff
- const defaultFunc = require('my-package').default
+ const defaultFunc = require('my-package')

defaultFunc() // yay!
```

## Background

https://github.com/developit/microbundle/issues/712

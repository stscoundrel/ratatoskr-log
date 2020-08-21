# Ratatoskr

Shorthand to avoid [object Object] log in Node.js. Useful when working with deep object hierarchy.

Simple package for times when you are too lazy to remember how util.inspect worked.

### Install

`yarn add ratatoskr`

### Usage

Ratatoskr givers versions of common log functions, that do not have limits for depth. Log the whole object without [object Object] confusion.


```javascript
const { log } = require('ratatoskr')

const massiveObject = { // Deep hierarchy }

log(massiveObject)

```

Ratatoskr also gives common variants of log:

```javascript
const { debug, error, info, warn, table } = require('ratatoskr')

const massiveObject = { // Deep hierarchy }

debug(massiveObject)
error(massiveObject)
info(massiveObject)
warn(massiveObject)
table(massiveObject)

```

#### What's in the name?

"Ratatoskr" is a squirrel in Norse mythology, that runs up and down the world tree Yggdrasil. It carries insults between an eagle and the serpent Níðhöggr. "Insult" seems accurate way to describe the limitations of basic console.log.

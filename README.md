# monospace [![Build Status](https://travis-ci.org/imsobear/monospace.svg?branch=master)](https://travis-ci.org/imsobear/monospace)

> get monospace string by space or dots

## Install

```bash
npm install --save monospace
```

## Example

```javascript
var monospace = require('monospace');

monospace("123456", 6);     // 123456
monospace("123456789", 6);  // 123...
monospace("123", 6);        // 123+three spaces
```

## Test

```bash
npm test
```

## License

MIT &copy; 2015 sobear

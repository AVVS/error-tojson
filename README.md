error-tojson
============

Adds Error.toJSON(), so we can easily stringify the error, for example when sending them over websockets


```
// just do it before anything else
require('error-tojson');
```

This package is incompatible with MongoDB native driver. Incompatibility is manifesting as a crash whenever mongo server returns and error. See [this PR discussion](https://github.com/mongodb/node-mongodb-native/pull/1293#issuecomment-166007944) for more info.

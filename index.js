const fclone = require('fclone');


if ('toJSON' in Error.prototype) {
  return;
}

Object.defineProperty(Error.prototype, 'toJSON', {
    value: function () {
        return fclone(this);
    },
    configurable: true,
    writable: true
});

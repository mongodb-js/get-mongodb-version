var getMongodbVersion = require('../');
var assert = require('assert');

describe('get-mongodb-version', function() {
  it('should work', function() {
    assert(getMongodbVersion);
  });
});

import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | forms-archive', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:forms-archive');
    assert.ok(route);
  });
});

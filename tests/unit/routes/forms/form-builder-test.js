import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | forms/form-builder', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:forms/form-builder');
    assert.ok(route);
  });
});

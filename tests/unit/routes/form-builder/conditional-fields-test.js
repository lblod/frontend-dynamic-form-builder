import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | form-builder/conditional-fields', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:form-builder/conditional-fields');
    assert.ok(route);
  });
});

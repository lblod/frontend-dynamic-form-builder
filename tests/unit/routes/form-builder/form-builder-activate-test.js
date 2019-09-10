import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | form-builder/form-builder-activate', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:form-builder/form-builder-activate');
    assert.ok(route);
  });
});

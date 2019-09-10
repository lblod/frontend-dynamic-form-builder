import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | form-builder/form-builder-edit-settings', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:form-builder/form-builder-edit-settings');
    assert.ok(route);
  });
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import 'dummy/initializers/component-styles';

moduleForComponent('test-addon-component', 'Integration | Component | test addon component', {
  integration: true
});

test('it has the namespaced class', function(assert) {
  this.render(hbs`{{test-addon-component}}`);
  const componentClasses = this.$().children(':first').attr('class');
  assert.ok(/__test-addon-component__/.test(componentClasses));
});

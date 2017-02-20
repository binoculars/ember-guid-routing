import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('node-view', 'Integration | Component | node view', {
  integration: true
});

test('it renders', function(assert) {
    this.set('model', {
        title: 'test'
    });

    this.render(hbs`{{node-view model=model}}`);

    assert.equal(this.$('span:nth-of-type(1)').text().trim(), 'I am a Node!');
    assert.equal(this.$('span:nth-of-type(2)').text().trim(), 'Title: test');
});

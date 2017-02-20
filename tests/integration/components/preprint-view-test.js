import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('preprint-view', 'Integration | Component | preprint view', {
  integration: true
});

test('it renders', function(assert) {
    this.set('model', {
        node: {
            title: 'test'
        }
    });

    this.render(hbs`{{preprint-view model=model}}`);

    assert.equal(this.$('span:nth-of-type(1)').text().trim(), 'I am a Preprint!');
    assert.equal(this.$('span:nth-of-type(2)').text().trim(), 'Title: test');
});

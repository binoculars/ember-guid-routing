import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            nodes: this.store.findAll('node'),
            preprints: this.store.findAll('preprint')
        });
    }
});

import Ember from 'ember';

const validGuidRegex = /^[a-z0-9]{5}$/i;

export default Ember.Route.extend({
    beforeModel(transition) {
        const {guid} = transition.params[this.routeName];

        if (validGuidRegex.test(guid)) {
            return;
        }

        throw new Error('Invalid GUID');
    },

    model(params) {
        const {guid} = params;

        return this
            .get('store')
            .findRecord('guid', guid);
    },

    setupController(controller, model) {
        // Call _super for default behavior
        this._super(controller, model);
        // Implement your custom setup after
        controller.set('modelName', model.get('constructor.modelName'));
    },

});

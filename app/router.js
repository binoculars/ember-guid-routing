import Ember from 'ember';
import config from 'ember-get-config';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function () {
    this.route('login');
    this.route('me');
    this.route('guid', { path: '/:guid' });
});

export default Router;

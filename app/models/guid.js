import DS from 'ember-data';

import OsfModel from 'ember-osf/models/osf-model';

export default OsfModel.extend({
    type: DS.attr('string')
});

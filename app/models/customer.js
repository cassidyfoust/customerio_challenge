import Model, {attr} from '@ember-data/model';

export default class CustomerModel extends Model {
    @attr attributes
    @attr events
    @attr last_updated
}
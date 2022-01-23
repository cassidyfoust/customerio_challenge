import Model, {attr} from '@ember-data/model';

export default class CustomersModel extends Model {
    @attr attributes
    @attr events
}
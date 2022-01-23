import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default class EditCustomerRoute extends Route {
  @service store;

  async model(customerObject) {
    let customer;
    customer = this.store.findRecord('customer', customerObject.id);
    return customer;
  }
}

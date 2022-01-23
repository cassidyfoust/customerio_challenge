import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default class EditCustomerRoute extends Route {
  @service store;

  async model(customerObject) {
    let customer;
    this.store.findRecord('customer', customerObject.id);
    await fetch(`http://localhost:1323/customers/${customerObject.id}`)
      .then((response) => response.json())
      .then((data) => {
        customer = data.customer;
        customer.last_updated = new Date(customer.last_updated * 1000);
      });
    return customer;
  }
}

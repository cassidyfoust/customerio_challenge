import Route from '@ember/routing/route';

export default class CustomerPageRoute extends Route {
  async model(customerObject) {
    let customer;
    await fetch(`http://localhost:1323/customers/${customerObject.id}`)
      .then((response) => response.json())
      .then((data) => {
        customer = data.customer
        customer.last_updated = new Date(customer.last_updated * 1000);
      });
    return customer;
      };
  }

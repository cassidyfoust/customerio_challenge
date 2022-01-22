import Route from '@ember/routing/route';

export default class CustomersRoute extends Route {
  async model() {
    let customers = [];
    await fetch('http://localhost:1323/customers')
      .then((response) => response.json())
      .then((data) => {
        data.customers.forEach((customer) => {
          customer.last_updated = new Date(customer.last_updated * 1000);
          customers.push(customer);
        });
      });
    return customers;
  }
}

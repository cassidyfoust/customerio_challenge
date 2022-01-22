import Route from '@ember/routing/route';

export default class CustomersRoute extends Route {
  async model() {
      let customers = [];
        await fetch('http://localhost:1323/customers')
        .then(response => response.json())
        .then(data => customers = data);
        return customers.customers;
    }
}

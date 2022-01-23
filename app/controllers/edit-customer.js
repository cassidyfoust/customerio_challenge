import Controller from '@ember/controller';
import { action } from '@ember/object';
import { set } from '@ember/object';


// a controller is a place to define 'actions', such as the things that should happen
// when a user clicks a button to create/read/edit/delete a record


export default class EditCustomerController extends Controller {

    @action
    addAttribute() {
      // get the input values from the .hbs template
      let newAttributeName = this.attributeName;
      let newAttributeValue = this.attributeValue;
      let newAttributes = this.model.attributes;
      newAttributes[newAttributeName] = newAttributeValue;
      this.store.findRecord('customer', this.model.id).then
      (function (customer)
      {
        customer.attributes = newAttributes;
        customer.save();
        });
    this.set('attributeName', null);
    this.set('attributeValue', null);
    this.model.reload();
  }

    @action
    deleteAttribute(attributeToDelete) {
      let newAttributes = this.model.attributes;
      delete newAttributes[attributeToDelete];
      this.store
        .findRecord('customer', this.model.id)
        .then(function (customer) {
          customer.attributes = newAttributes;
          customer.save();
        });
      this.model.reload();
    }

    @action
    updateCustomer() {
      let newAttributes = this.model.attributes;
      this.store
        .findRecord('customer', this.model.id)
        .then(function (customer) {
          customer.attributes = newAttributes;
          customer.save();
        });
      this.model.reload();
    }

    @action
    attributeChanged(attribute, event) {
      this.model.attributes[attribute] = event.target.value;
    }
};

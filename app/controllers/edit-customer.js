import Controller from '@ember/controller';
import { action } from '@ember/object';

// a controller is a place to define 'actions', such as the things that should happen
// when a user clicks a button to create/read/edit/delete a record

export default class EditCustomerController extends Controller {
    @action
    addAttribute() {
      // get the input values from the .hbs template
      let newAttributeName = this.newAttributeName;
      let newAttributeValue = this.newAttributeValue;
      let newAttributes = this.model.attributes;
      newAttributes[newAttributeName] = newAttributeValue;
      this.store.findRecord('customer', this.model.id).then
      (function (customer)
      {
        customer.attributes = newAttributes;
        customer.save();
        });
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
    }

    @action
    attributeChanged(attribute, event) {
      this.model.attributes[attribute] = event.target.value;
    }
};

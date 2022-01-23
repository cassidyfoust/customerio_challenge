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
    //     updateBoardGame() {
    //       let updatedTitle = this.get('updatedTitle');
    //       let game = this.get('model').findBy('id', '1');
    //       game.set('title', updatedTitle); // locally update the title
    //       game.save(); // save the title to API via PATCH
    //     },
    //     destroyBoardGame() {
    //       let destroyId = this.get('destroyId');
    //       let game = this.get('model').findBy('id', destroyId);
    //       game.destroyRecord(); // destroy deletes & saves in one step
    //     },
};

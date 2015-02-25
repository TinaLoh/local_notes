import Ember from 'ember';

export default Ember.Controller.extend({
  message: "Welcome to the Notes App",

  actions: {
    createNote: function() {
      var title = this.get("newTitle");
      var body = this.get("newBody");
      var note = this.store.createRecord('note', {title: title, body: body});
      note.save();
      this.set("newTitle", " ");
      this.set("newBody", " ");
      this.set("message", "Successfully created a note!");
    },

    deleteNote: function(note) {
    console.log(note);
    var _this = this;
    note.destroyRecord().then(function() {
    _this.set("message", "Note deleted!");
    });
   }
  }
});

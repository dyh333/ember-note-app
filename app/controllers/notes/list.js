import Controller from '@ember/controller';
// import Guid from 'ember-cli-guid';

export default Controller.extend({
  textValue: '',
  modalStatus: '',
  isShowingAddModal: false,

  actions: {
    showNote(note) {
      this.set('modalStatus', 'show');
      this.set('textValue', note.get('thing'));
      this.set('isShowingAddModal', true);
    },
    selectNote(note) {
      this.set('noteForSelect', note);
    },
    deleteNote() {
      const noteForSelect = this.get('noteForSelect');
      if (noteForSelect) {
        this.store.deleteRecord(noteForSelect);
        noteForSelect.save();
      } else {
        alert('请先选择一条记录');
      }
    },
    addNote() {
      this.set('modalStatus', 'new');
      this.set('textValue', null);
      this.set('isShowingAddModal', true);
    },
    updateNote() {
      const noteForSelect = this.get('noteForSelect');
      if (noteForSelect) {
        this.set('modalStatus', 'update');
        this.set('textValue', noteForSelect.get('thing'));
        this.set('isShowingAddModal', true);
      } else {
        alert('请先选择一条记录');
      }
    },
    submit() {
      switch (this.get('modalStatus')) {
        case 'new':
          this.addRecord();
          break;
        case 'update':
          this.updateRecord();
          break;
      }

      this.set('isShowingAddModal', false);
    }
  },

  addRecord() {
    let newNote = this.store.createRecord('note');
    newNote.set('thing', this.textValue);
    newNote.set('datetime', new Date());
    newNote.save();
  },
  updateRecord() {
    const noteForSelect = this.get('noteForSelect');
    noteForSelect.set('thing', this.textValue);
    noteForSelect.set('datetime', new Date());

    noteForSelect.save();
  }
});

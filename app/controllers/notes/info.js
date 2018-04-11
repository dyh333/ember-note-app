import Controller from '@ember/controller';

export default Controller.extend({
  newPassword: '',
  isUpdate: false,

  actions: {
    updatePassword() {
      this.set('isUpdate', true);
    },
    confirmUpdate() {
      if (this.get('newPassword') === this.get('model.password')) {
          alert('新密码不能与旧密码相同');
      } else {
        this.set('model.password', this.get('newPassword'));
        
        this.set('newPassword', null);
        this.set('isUpdate', false);

        this.transitionToRoute('login');
      }
    }
  }
});

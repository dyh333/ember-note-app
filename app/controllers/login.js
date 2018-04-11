import Controller from '@ember/controller';

export default Controller.extend({
  username: 'admin',
  password: '3',

  actions: {
    login() {
      if (
        this.get('username') === this.get('model').get('name') &&
        this.get('password') === this.get('model').get('password')
      ) {
        // console.log(this.get('model').get('name'));
        // this.get('model')
        //   .save()
        //   .then(() => {
        //     // console.log(this.store.findAll('user'));
        //   });

        this.transitionToRoute('notes.list');
      } else {
        alert('用户名或密码错误');
      }
    }
  }
});

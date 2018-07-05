import {observable, decorate} from 'mobx';

class User {
  email = '';
  password = '';

  user = null;
}

decorate(User, {
  email: observable,
  password: observable
});

export default new User();
import app from "./service";

app.service('AuthService', function ($http, $q, $compile, $state) {

  class Authentication {
    constructor() {
      this.load();
    }

    load() {
      this.user = JSON.parse(localStorage.getItem('authenticationData')) || null;
    }

    setUser(user) {
      this.user = user;
      this.save();
    }

    getUser() {
      return this.user;
    }

    save() {
      localStorage.setItem('authenticationData', JSON.stringify(this.user));
    }

    clear() {
      this.user = null;
      localStorage.removeItem('authenticationData');
    }

    chackAuthenticate() {
      return $q((resolve, reject)=> {
        if (this.user != null) {
          resolve(this.user);
        } else {
          reject();
        }
      })
    }

    logout() {
      this.clear();
      $state.go("sign.in");

    }

    signIn(signInData) {
      return $http.get("users.json").then((users)=> {
        users.data.forEach(item=> {
          if (item.login == signInData.login && item.password == signInData.password)
            this.setUser(item);
        });
        //this.setUser(user);

      });
    }

  }

  return new Authentication();

});

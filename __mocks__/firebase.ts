import assert from 'assert';

class Auth {
  static auth = null;
  setUser = null;

  signInWithCredential = (credential) => {
    assert(credential === 'credential');
    this.setUser && this.setUser({ name: 'mock user' });
    return new Promise((resolve) => resolve());
  }

  setUserCallback(setUser) {
    this.setUser = setUser;
  }
}

const auth = () => {
  if (Auth.auth == null) {
    Auth.auth = new Auth();
  }
  return Auth.auth;
};

auth.FacebookAuthProvider = {
  credential: () => 'credential',
};

module.exports = {
  auth,
};

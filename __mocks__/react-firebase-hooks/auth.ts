import * as React from 'react';

const auth = {
  useAuthState: (firebaseAuth) => {
    const [user, setUser] = React.useState(null);
    firebaseAuth.setUserCallback(setUser);
    return ([user, null, null]);
  },
}
;

module.exports = auth;

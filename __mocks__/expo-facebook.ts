export const logInWithReadPermissionsAsync = () => {
  return new Promise(
    (resolve) => {
      resolve({ type: 'success', token: 'testToken' });
    }
  );
};

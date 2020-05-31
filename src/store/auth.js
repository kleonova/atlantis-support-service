import firebase from "firebase/app";

export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      // eslint-disable-next-line no-useless-catch
      try {
        console.log(dispatch);
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        commit("setError", e); //заставить изменить store
        throw e;
      }
    },
    async logout() {
      await firebase.auth().signOut();
    },
    async register({ dispatch, commit }, { email, password, contract }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch("getUid"); //await превращает promise в значение
        await firebase
          .database()
          .ref(`/users/${uid}/info`)
          .set({
            username: "",
            contract
          });
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    getUid() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    }
  }
};

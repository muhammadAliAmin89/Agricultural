import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getDatabase,
  ref,
  set,
  onValue,
} from "firebase/database";
import { app } from "./firebaseConfig";

const auth = getAuth(app);
const db = getDatabase(app);

// firebase signup method

export let FBsignUp = (body: any, nodeName: any) => {
  return new Promise<any>((resolve, reject) => {
    if (!body.Email || !body.Password) {
      reject("please enter Email or Password");
    } else {
      createUserWithEmailAndPassword(auth, body.Email, body.Password).then(
        (res) => {
          let id = res.user.uid;
          body.id = id;
          const referece = ref(db, `${nodeName}/${id}`);
          set(referece, body)
            .then((user) => {
              resolve(user);
            })
            .catch((errs) => {
              reject(errs);
            })
            .catch((err) => {
              reject(err);
            });
        }
      );
    }
  });
};

// firebase login method

export let FBlogin = (body: any, nodeName: any) => {
  return new Promise<any>((resolve, reject) => {
    if (!body.Email || !body.Password) {
      reject("please enter Email or Password");
    } else {
      signInWithEmailAndPassword(auth, body.Email, body.Password)
        .then((res) => {
          let id = res.user.uid;
          body.id = id;
          const referece = ref(db, `${nodeName}/${id}`);
          onValue(referece, (data) => {
            if (data.exists()) {
              console.log(data.val());
              resolve(data.val());
            } else {
              reject("No Data Found");
            }
          });
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};

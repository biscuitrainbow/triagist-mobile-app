import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFirestore } from "angularfire2/firestore";

@Injectable()
export class FirebaseUserProvider {

  constructor(
    public firebaseAuth: AngularFireAuth,
    public firestore: AngularFirestore
  ) {
  }

  getUser() {
    let uid = this.firebaseAuth.auth.currentUser.uid;
    return this.firebaseAuth.auth.currentUser
  }

  getUserDetail() {
    let uid = this.firebaseAuth.auth.currentUser.uid;
    return this.firestore
      .collection("users")
      .doc(uid)
      .ref.get();
  }

  getTriages() {
    let uid = this.firebaseAuth.auth.currentUser.uid;
    return this.firestore
      .collection("users")
      .doc(uid)
      .collection("triages")
      .ref.get();
  }
}

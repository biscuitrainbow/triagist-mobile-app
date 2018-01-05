import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class FirebaseUserProvider {
  uid: string;

  constructor(public firebaseAuth: AngularFireAuth, public firestore: AngularFirestore) {
    this.uid = this.firebaseAuth.auth.currentUser.uid;
  }

  getUser() {
    return this.firestore
      .collection('users')
      .doc(this.uid)
      .ref
      .get();
  }

  getTriages() {
    return this.firestore
      .collection('users')
      .doc(this.uid)
      .collection('triages')
      .ref
      .get()
  }

}

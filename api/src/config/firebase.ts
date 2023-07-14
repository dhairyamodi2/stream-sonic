import admin, { ServiceAccount } from 'firebase-admin';
//@ts-ignore
import serviceAccount from './serviceAccountKey.json'; 

import firebase from 'firebase/app';
import {ref } from 'firebase/storage';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as (string | ServiceAccount)),
    storageBucket: "gs://vstock-bdc69.appspot.com"
})

const bucket = admin.storage().bucket();
export {ref, bucket}
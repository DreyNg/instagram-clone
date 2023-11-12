import { firebase, FieldValue } from "../lib/firebase";

export async function createUserWithEmailAndPassword(
    email,
    password,
    username
) {
    // check if username exist
    // check email already taken
    // create authentication on db, add display name
    // store in firebase
}

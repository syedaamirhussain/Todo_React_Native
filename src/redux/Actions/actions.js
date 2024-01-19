import firebase from '../../../firebase/index';
import { addDoc, doc, setDoc, getDoc, collection, getDocs, query, where, deleteDoc, onSnapshot } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, db, } from '../../../firebase/index'
import { useSelector } from 'react-redux';


export const HandleSignIn = (email, password, navigation) => async (dispatch) => {
  try {
    dispatch({ type: 'IS_LOGIN_LOADING', payload: true });
    const data = await signInWithEmailAndPassword(auth, email, password);
    const userId = data.user.uid
    const userData = await getDoc(doc(db, "users", userId))
    const userDetails = userData.data()
    dispatch({ type: 'USER_DATA', payload: userDetails });
    navigation.navigate('dashboard')
  } catch (error) {
    dispatch({ type: 'SIGN_IN_FAILURE', payload: error.code });

  }
  finally {
    dispatch({ type: 'IS_LOGIN_LOADING', payload: false });
  }
};

export const HandleSignUp = (name, email, password, navigation) => async (dispatch) => {
  try {
    dispatch({ type: 'IS_SIGNUP_LOADING', payload: true });
    const newAcc = await createUserWithEmailAndPassword(auth, email, password);
    const userId = newAcc.user.uid;
    await setDoc(doc(db, 'users', userId), {
      name,
      email,
      userId: userId
    });
    const data = {
      username: name,
      email,
      userId
    }
    dispatch({ type: 'USER_DATA', payload: data });
    navigation.navigate('dashboard')
  } catch (error) {
    console.log(error)
    dispatch({ type: 'SIGN_UP_FAILURE', payload: error.message });
  }
  finally {
    dispatch({ type: 'IS_SIGNUP_LOADING', payload: false });

  }
};

export const createNotes = (title, description, userId, navigation) => async (dispatch) => {
  try {
    const response = await addDoc(collection(db, 'notes'), {
      title,
      description,
      userId,
    })
    navigation.navigate('dashboard')
    // console.log(response, "data posted")
  }
  catch (error) {
    console.log(error)
  }
}

export const fetchUserNotes = (userId) => async (dispatch) => {
  try {
    const notesCollection = collection(db, 'notes');
    const notesQuery = query(notesCollection, where('userId', '==', userId));

    // Initial fetch
    const initialSnapshot = await getDocs(notesQuery);
    const userNotes = initialSnapshot.docs.map((doc) => ({ todoId: doc.id, ...doc.data() }));
    
    // Dispatch initial notes
    dispatch({ type: 'GET_USER_NOTES', payload: userNotes });

    // Set up real-time listener for changes
    const unsubscribe = onSnapshot(notesQuery, (snapshot) => {
      const updatedNotes = snapshot.docs.map((doc) => ({ todoId: doc.id, ...doc.data() }));
      dispatch({ type: 'GET_USER_NOTES', payload: updatedNotes });
    });

    // Save the unsubscribe function to call later (e.g., when the component unmounts)
    dispatch({ type: 'SET_UNSUBSCRIBE', payload: unsubscribe });
  } catch (error) {
    console.log(error);
  }
};
export const deleteNote = (todoId) => async (dispatch, getState) => {
  const { auth } = getState();
  const authNotes = auth.notes;

  try {
    const response = await deleteDoc(doc(db, "notes", todoId));
    const updatedNotes = authNotes.filter((note) => note.todoId !== todoId);

    dispatch({ type: 'GET_USER_NOTES', payload: updatedNotes });
  }
  catch (error) {
    console.log(error, "Delete note error")
  }
}

export const signout = () => (dispatch) => {

  signOut(auth)

};


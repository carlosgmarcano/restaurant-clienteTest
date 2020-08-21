import app from 'firebase/app';
import firebaseConfig from './config';
import 'firebase/firestore';
import 'firebase/storage'

class Firebase {
    constructor() {
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig)
        }
        this.datosDB = app.firestore() //Se crea un objeto con todas las operacions para db
        this.storage = app.storage();
    }
}

//Cuando instanciamos la clase le pasamos toda la configuracion del firebaseConfig
const firebase = new Firebase();

export default firebase;
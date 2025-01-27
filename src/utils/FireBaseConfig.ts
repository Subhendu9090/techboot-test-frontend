// export const firebaseConfig = {
//   apiKey: "AIzaSyAKkoETCWu62Eujvd39RpwMWnbzMMeZeEw",
//   authDomain: "carbon-cred-test.firebaseapp.com",
//   projectId: "carbon-cred-test",
//   storageBucket: "carbon-cred-test.firebasestorage.app",
//   messagingSenderId: "300844473483",
//   appId: "1:300844473483:web:1a2e0ff67c795a561dc88e",
//   measurementId: "G-1F5HG4831G"
// };

// export const firebaseConfig = {
//   apiKey: 'AIzaSyA-go-4LWP9kVDxwQPmRzVrPEy39FPhTk4',
//   authDomain: 'ccred-c44d9.firebaseapp.com',
//   projectId: 'ccred-c44d9',
//   storageBucket: 'ccred-c44d9.firebasestorage.app',
//   messagingSenderId: '952343429763',
//   appId: '1:952343429763:web:814742a4d00932e75591b6',
//   measurementId: 'G-V0NJYGGTQL',
// };

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};
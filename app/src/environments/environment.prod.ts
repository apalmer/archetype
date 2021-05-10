export const environment = {
  production: true,
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebase: {
    apiKey: "AIzaSyA7VpeLPyNGOuOrHl6gDf0H-HG5kklfOfQ",
    authDomain: "archetype-297c3.firebaseapp.com",
    projectId: "archetype-297c3",
    storageBucket: "archetype-297c3.appspot.com",
    messagingSenderId: "189754730397",
    appId: "1:189754730397:web:5e7069c460944b73c2b174",
    measurementId: "G-4JLRC0XBZ4"
  },
  ngxFireBaseUiAppNameFactory: () => { return 'your_app_name_factory'; },
  ngxFirebaseUi: {
    enableFirestoreSync: true, // enable/disable autosync users with firestore
    toastMessageOnAuthSuccess: false, // whether to open/show a snackbar message on auth success - default : true
    toastMessageOnAuthError: false, // whether to open/show a snackbar message on auth error - default : true
    authGuardFallbackURL: '/', // url for unauthenticated users - to use in combination with canActivate feature on a route
    authGuardLoggedInURL: '/', // url for authenticated users - to use in combination with canActivate feature on a route
    passwordMaxLength: 60, // `min/max` input parameters in components should be within this range.
    passwordMinLength: 8, // Password length min/max in forms independently of each componenet min/max.
    // Same as password but for the name
    nameMaxLength: 50,
    nameMinLength: 2,
    // If set, sign-in/up form is not available until email has been verified.
    // Plus protected routes are still protected even though user is connected.
    guardProtectedRoutesUntilEmailIsVerified: true,
    enableEmailVerification: true, // default: true
    useRawUserCredential: true, // If set to true outputs the UserCredential object instead of firebase.User after login and signup - Default: false
  }
};
const
    functions = require('firebase-functions'),
    admin     = require('firebase-admin');
    
admin.initializeApp();

exports.deleteUser = functions.https.onCall((data, context) => {
    
    if (!context.auth)
        throw new functions.https.HttpsError('failed-precondition', 'The function must be called while authenticated.');
        
    const uid = context.auth.token.uid;
    admin.auth().deleteUser(uid);
    
});
<template>
  <section>
      signin
    <div id="firebaseui-auth-container"></div>
  </section>
</template>

<script>
import firebase  from '@/firebaseinit';
import 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

const ui = new firebaseui.auth.AuthUI(firebase.auth());

export default {
    mounted(){
        this.showSignInUi();
    },
    methods: {
        showSignInUi(){
            const uiConfig = {
                signInSuccessUrl: "/profile",
                signInOptions: [
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    firebase.auth.EmailAuthProvider.PROVIDER_ID
                ]
            };
            ui.start('#firebaseui-auth-container', uiConfig);
        },
        signOut(){
            firebase.auth().signOut();
        },
        deleteAccount(){
            firebase.auth().currentUser.delete().then(function() {
                logEvent('user_deleted');
            }).catch(function(error) {
                alert('Could not delete account, only recently signed in accounts can be deleted. Please try to sign out, sign in and delete again.');
            });
        }
    }
}
</script>

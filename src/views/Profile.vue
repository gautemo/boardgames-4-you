<template>
    <div class="profile-wrapper">
        <div>Hello, <span class="username">{{user.displayName}}</span>!</div>
        <h1 class="delete-account" @click="deleteAccount">DELETE YOUR ACCOUNT</h1>
    </div>
</template>

<script>
import firebase from '@/firebaseinit';

export default {
    data() {
        return {
            user: firebase.auth().currentUser
        }
    },
    methods: {
        async deleteAccount() {
            
            const deleteUser = firebase.functions().httpsCallable("deleteUser");
            
            const res = await Promise.resolve(deleteUser())
                .catch(e => {
                    console.error(e);
                    alert("Could not delete user please try again.");
                    return new Error();
                });
                
            if (res instanceof Error) return;
            
            firebase.auth().signOut();
            this.$router.push("/");
            
            
            
            // console.log(res.catch(err => console.log));
            
            // firebase.auth().currentUser.delete().then(function() {
            //     firebase.analytics().logEvent("user_deleted");
            // }).catch(function(error) {
            //     alert('Could not delete account, only recently signed in accounts can be deleted. Please try to sign out, sign in and delete again.');
            // });
            
        }
    }
}

</script>

<style scoped>

    .username {
        background: pink;
        padding: 5px;
    }
    
    .delete-account {
        cursor: pointer;
        text-decoration: underline;
        color: blue;
    }

</style>
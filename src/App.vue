<template>
  <main id="app">
    <div class="nav-wrapper">
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/groups">Groups</router-link>
          <router-link to="/profile">Profile</router-link>
          <div v-if="loggedIn" @click="signOut" class="signout">Sign out</div>
          <router-link v-else to="/signin">Signin</router-link>
        </nav>
    </div>
    <router-view/>
  </main>
</template>

<script>
import firebase from '@/firebaseinit';
export default {
    created() {
        firebase.auth().onAuthStateChanged(user => this.loggedIn = !!user);
    },
    data() {
        return {
            loggedIn: !!firebase.auth().currentUser
        }
    },
    methods: {
        signOut() {
            
            firebase.auth().signOut();
            this.$router.push("/");
            
        }
    }
}
    
    
</script>

<style>

body {
    padding: 0;
    margin: 0;
}

.nav-wrapper {
    width: 100vw;
    border: 2px solid orange;
}

nav {
    margin: 0 auto;
    width: 100%;
    max-width: 960px;
}

.signout {
    display: inline-block;
}

</style>

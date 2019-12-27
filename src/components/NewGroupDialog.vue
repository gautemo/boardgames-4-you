<template>
    <dialog open>
        <input type="text"  v-model="name"/>
        <button @click="create">Create</button>
    </dialog>
</template>

<script>
import firebase from '@/firebaseinit';

export default {
    data(){
        return {
            name: ''
        }
    },
    methods:{
        async create(){
            const db = firebase.firestore();
            const creator = firebase.auth().currentUser;

            const id = this.name.toLowerCase().replace(/ /g, '-');
            const group = {
                name: this.name,
                members: [{uid: creator.uid, name: creator.displayName, role: 'Owner'}],
                memberIds: [creator.uid]
            }

            await db.collection('groups').doc(id).set(group);
            this.$router.push(`group/${id}`);
        }
    }
}
</script>
<template>
    <section>
        <div class="box" @click="create">
            + Create Group
        </div>
        <div class="box" v-for="group in myGroups" :key="group.name" @click="goToGroup(group.id)">
            {{group.name}}
        </div>
        <NewGroupDialog v-if="createDialog"/>
    </section>
</template>

<script>
import firebase from '@/firebaseinit';

export default {
    async created(){
        const uid = firebase.auth().currentUser.uid;

        const db = firebase.firestore();
        const groups = await db.collection('groups').where('memberIds', 'array-contains', uid).get();
        this.myGroups = groups.docs.map(g => ({ id: g.id, ...g.data() }));
    },
    data(){
        return{
            createDialog: false,
            myGroups: []
        }
    },
    methods: {
        create(){
            this.createDialog = true;
        },
        goToGroup(id){
            this.$router.push(`group/${id}`)
        }
    },
    components:{
        NewGroupDialog: () => import('@/components/NewGroupDialog')
    }
}
</script>

<style scoped>
section{
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(350px,1fr));
}

.box{
    border-radius: 5px;
    border: 1px solid gray;
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
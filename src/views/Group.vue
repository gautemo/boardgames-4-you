<template>
    <section>
        <h1>{{group.name}}</h1>
        Members:
        <ul>
            <li v-for="member in group.members" :key="member.uid">{{member.name}}</li>
        </ul>
        <Search/>
    </section>
</template>

<script>
import firebase from '@/firebaseinit';

export default {
    async created(){
        const db = firebase.firestore();
        const doc = await db.collection('groups').doc(this.$route.params.id).get();
        this.group = doc.data();
    },
    data(){
        return{
            group: {}
        }
    },
    methods: {
        create(){
            this.createDialog = true;
        }
    },
    components:{
        Search: () => import('@/components/Search')
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
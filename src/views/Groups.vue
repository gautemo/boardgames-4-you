<template>
    <section>
        <div class="box" @click="create">
            + Create Group
        </div>
        <NewGroupDialog/>
    </section>
</template>

<script>
export default {
    methods: {
        create(){

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
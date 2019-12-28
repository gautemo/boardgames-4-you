<template>
    <div>
        <input type="text" v-model="text">
        <button @click="search">Search</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            text: ''
        }
    },
    methods: {
        async search(){
            const response = await fetch(`${process.env.VUE_APP_API}search?name=${this.text}&client_id=${process.env.VUE_APP_API_CLIENT_ID}`);
            const data = await response.json();
            console.log(data);
        }
    }
}
</script>
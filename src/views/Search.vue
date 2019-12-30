<template>
    <div class="search">
        <input type="text" v-model="text" @input="searchAfterDelay">
        <ul>
            <li v-for="game in games" :key="game.id">
                <AddGame :game="game" />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            text: '',
            games: [],
            timer: null
        }
    },
    methods: {
        async search(){
            const response = await fetch(`${process.env.VUE_APP_API}search?name=${this.text}&client_id=${process.env.VUE_APP_API_CLIENT_ID}&fuzzy_match=true&limit=25`);
            const data = await response.json();
            data.games.sort((a,b) => b.num_user_ratings - a.num_user_ratings);
            this.games = data.games;
        },
        searchAfterDelay(){
            if(this.text.length < 2){
                this.stopTimer();
                this.games = [];
                return;
            }
            this.stopTimer();
            this.timer = setTimeout(this.search, 500);
        },
        stopTimer(){
            if(this.timer){
                clearTimeout(this.timer);
                this.timer = null;
            }
        }
    },
    components: {
        AddGame: () => import('@/components/AddGame')
    }
}
</script>

<style scoped>
.search{
    margin: 10px 20%;
}

input{
    width: 100%;
    font-size: 1.2em;
    padding: 3px;
}

ul{
    list-style: none;
    padding: 0;
}
</style>
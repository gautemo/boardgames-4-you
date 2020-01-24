<template>
    <div class="game">
        <img :src="game.images.small" alt="Image of boardgame">
        <p class="title">{{game.name}}</p>
        <GameDetail icon="/icons/star_border-24px.svg" alt="rating" :text="game.average_user_rating.toFixed(1)"/>
        <GameDetail icon="/icons/calendar_today-24px.svg" alt="year" :text="game.year_published"/>
        <GameDetail icon="/icons/group-24px.svg" alt="players" :text="`${game.min_players} - ${game.max_players}`"/>
    </div>
</template>

<script>
export default {
    props: ['game'],
    components:{
        GameDetail: () => import('@/components/GameDetail')
    }
}
</script>

<style scoped>
.game{
    margin: 5px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: repeat(4, auto);
    grid-column-gap: 10px;
}

img{
    grid-row: 1 / -1;
    align-self: center;
}

.title{
    font-size: 1.2em;
    text-decoration: underline;
    margin: 0;
}
</style>
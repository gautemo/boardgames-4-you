<template>
    <div>
        <img :src="icon" :alt="alt">
        <span>{{text}}</span>
    </div>
</template>

<script>
export default {
    props: ['icon', 'alt', 'text']
}
</script>

<style scoped>
div{
    display: flex;
    align-items: center;
}

img{
    margin-right: 5px;
}
</style>
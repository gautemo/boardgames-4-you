<template>
    <div class="Profile-wrapper">{{redan}}</div>
</template>

<script>

export default {
    mounted() {
        setTimeout(() => this.redan = "redan!!!!", 1000);
    },
    data() {
        return {
            redan: "not redan!!",
        }
    }
}

</script>
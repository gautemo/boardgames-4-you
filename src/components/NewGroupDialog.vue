<template>
    <dialog open>
        <input type="text"  v-model="name"/>
    </dialog>
</template>

<script>
export default {
    data(){
        return {
            name: ''
        }
    }
}
</script>
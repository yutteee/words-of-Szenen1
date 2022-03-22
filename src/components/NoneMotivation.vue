<template>
<v-container class="center">
    <v-img src="../assets/motivation.png" width="250px" class="image"></v-img>
    <p>製作者のモチベが低いよ!応援してくれたら作ってくれる可能性が高いよ!</p>
    <v-btn @click="incrementTotal">応援</v-btn>
    <div>total:{{ total }}</div>
</v-container>
</template>

<script>
export default {
    data(){
        return {
            total: 0
        }
    },
    methods: {
        incrementTotal: function(){
            this.total++
        }
    }
}
</script>

<style scoped>
.center {
    text-align: center;
}

.image {
    display: inline-block;
}

</style>
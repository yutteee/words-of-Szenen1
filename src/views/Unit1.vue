<template>
<v-container>
    <v-layout>
        <v-switch v-for="greetTitle in greetTitles" :key="greetTitle.value" v-model="greetTitle.shown" :label="greetTitle.value"></v-switch>
    </v-layout>
    <v-data-table :headers="shownHeaders" :items="greetItems" hide-default-footer class="elevation-1">
        <template v-slot:items="{ item }">
            <td v-for="header in shownHeaders" :key="header.value">{{ item[header.value] }}</td>
        </template>
    </v-data-table>
    <!-- <v-data-table :headers="numberTitles" :items="numberItems" hide-default-footer></v-data-table> -->
</v-container>
</template>

<script>
export default {
    name: "unit1",
    data(){
        return {
            greetTitles: [
                { text: "挨拶", value: "deutsch", aligin: "start", shown: true },
                { text: "訳", value: "japan", shown: true }
            ],
            greetItems: [
                { deutsch: "Guten Morgen!", japan: "おはよう!" },
                { deutsch: "Guten Tag!", japan: "こんにちは!" },
                { deutsch: "Guten AbenD!", japan: "こんばんは!" },
                { deutsch: "Gute Nacht!", japan: "おやすみ!" },
                { deutsch: "Auf Wiedersehen!", japan: "さようなら!" },
                { deutsch: "Tschüs", japan: "バイバイ!" }
            ],
            // numberTitles: [
            //     {text}
            // ]
        }
    },
    computed: {
        shownHeaders() {
            return this.greetTitles.filter(h => h.shown);
        }
    }
}
</script>

<style scoped>

</style>
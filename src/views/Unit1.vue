<template>
<v-container>
    <p>Unit1 Kennenlernen</p>
    <!-- 挨拶のリスト -->
    <v-layout row>
        <v-switch v-for="greetTitle in greetTitles" :key="greetTitle.value" v-model="greetTitle.shown" :label="greetTitle.value"></v-switch>
    </v-layout>
    <v-data-table :headers="shownGreets" :items="greetItems" hide-default-footer class="elevation-1">
        <template v-slot:items="{ item }">
            <td v-for="header in shownGreets" :key="header.value">{{ item[header.value] }}</td>
        </template>
    </v-data-table>
    <!-- 数字のリスト -->
    <v-layout row>
        <v-switch v-for="numberTitle in numberTitles" :key="numberTitle.value" v-model="numberTitle.shown" :label="numberTitle.value"></v-switch>
    </v-layout>
    <v-data-table :headers="shownNumbers" :items="numberItems" class="elevation-1">
        <template v-slot:items="{ item }">
            <td v-for="header in shownNumbers" :key="header.value">{{ item[header.value] }}</td>
        </template>
    </v-data-table>
    <!-- 名詞のリスト -->
    <v-layout row>
        <v-switch v-for="nownTitle in nownTitles" :key="nownTitle.value" v-model="nownTitle.shown" :label="nownTitle.value"></v-switch>
    </v-layout>
    <v-data-table :headers="shownNowns" :items="nownItems" hide-default-footer class="elevation-1">
        <template v-slot:items="{ item }">
            <td v-for="header in shownNowns" :key="header.value">{{ item[header.value] }}</td>
        </template>
    </v-data-table>
    <!-- 動詞のリスト -->
    <v-layout row>
        <v-switch v-for="verbTitle in verbTitles" :key="verbTitle.value" v-model="verbTitle.shown" :label="verbTitle.value"></v-switch>
    </v-layout>
    <v-data-table :headers="shownVerbs" :items="verbItems" hide-default-footer class="elevation-1">
        <template v-slot:items="{ item }">
            <td v-for="header in shownVerbs" :key="header.value">{{ item[header.value] }}</td>
        </template>
    </v-data-table>
    <!-- その他のリスト -->
    <v-layout row>
        <v-switch v-for="otherTitle in otherTitles" :key="otherTitle.value" v-model="otherTitle.shown" :label="otherTitle.value"></v-switch>
    </v-layout>
    <v-data-table :headers="shownOthers" :items="otherItems" class="elevation-1">
        <template v-slot:items="{ item }">
            <td v-for="header in shownOthers" :key="header.value">{{ item[header.value] }}</td>
        </template>
    </v-data-table>
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
            numberTitles: [
                { text: "数字", value: "deutsch", aligen: "start", shown: true },
                { text: "訳", value: "japan", shown: true }
            ],
            numberItems: [
                { deutsch: "null", japan: "0" },
                { deutsch: "eins", japan: "1" },
                { deutsch: "zwei", japan: "2" },
                { deutsch: "drei", japan: "3" },
                { deutsch: "vier", japan: "4" },
                { deutsch: "fünf", japan: "5" },
                { deutsch: "sechs", japan: "6" },
                { deutsch: "sieben", japan: "7" },
                { deutsch: "acht", japan: "8" },
                { deutsch: "neun", japan: "9" },
                { deutsch: "zehn", japan: "10" },
                { deutsch: "elf", japan: "11" },
                { deutsch: "zwölf", japan: "12" },
                { deutsch: "dreizehen", japan: "13" },
                { deutsch: "vierzehn", japan: "14" },
                { deutsch: "fünfzehn", japan: "15" },
                { deutsch: "sechzehn", japan: "16" },
                { deutsch: "siebzehn", japan: "17" },
                { deutsch: "achtzehn", japan: "18" },
                { deutsch: "neunzehn", japan: "19" },
                { deutsch: "zwanzig", japan: "20" },
                { deutsch: "einundzwanzig", japan: "21" },
                { deutsch: "dreißig", japan: "30" },
                { deutsch: "vierzig", japan: "40" },
                { deutsch: "fünfzig", japan: "50" },
                { deutsch: "sechzig", japan: "60" },
                { deutsch: "siebzig", japan: "70" },
                { deutsch: "achtzig", japan: "80" },
                { deutsch: "neunzig", japan: "90" },
                { deutsch: "(ein)hundert", japan: "100" },
                { deutsch: "(ein)tausend", japan: "1,000" },
                { deutsch: "zehntausend", japan: "10,000" },
                { deutsch: "hunderttausend", japan: "100,000" },
            ],
            nownTitles: [
                { text: "名詞", value: "deutsch", aligin: "start", shown: true },
                { text: "性", value: "gender", shown: true },
                { text: "複数形", value: "pluram", shown: true},
                { text: "訳", value: "japan", shown: true}
            ],
            nownItems: [
                { deutsch: "Name", gender: "r", pluram: "-n", japan: "名前" },
                { deutsch: "Stadt", gender: "e", pluram: "-ë", japan: "町、都市" },
                { deutsch: "Nummer", gender: "e", pluram: "-n", japan: "番号" },
                { deutsch: "Handy", gender: "s", pluram: "-s", japan: "携帯電話" },
                { deutsch: "Vorwahl", gender: "e", pluram: "-en", japan: "市外局番" },
                { deutsch: "Reise", gender: "e", pluram: "-n", japan: "旅行" },
                { deutsch: "Tag", gender: "r", pluram: "-e", japan: "日" },
                { deutsch: "Euro", gender: "r", pluram: "", japan: "ユーロ" },
            ],
            verbTitles: [
                { text: "動詞", value: "deutsch", aligin: "start", shown: true },
                { text: "過去形", value: "past", shown: true },
                { text: "過去分詞", value: "pastParticiple", shown: true},
                { text: "訳", value: "japan", shown: true}
            ],
            verbItems: [
                { deutsch: "heißen", past: "hieß", pastParticiple: "geheißen", japan: "名である" },
                { deutsch: "sein", past: "war", pastParticiple: "gewesen", japan: "である" },
                { deutsch: "kommen", past: "kam", pastParticiple: "bekommen", japan: "来る" },
                { deutsch: "wohnen", past: "wohnte", pastParticiple: "gewohnt", japan: "住む" },
                { deutsch: "gehen", past: "ging", pastParticiple: "gegangen", japan: "行く" },
                { deutsch: "kosten", past: "kostete", pastParticiple: "gekostet", japan: "（値段は）である" },
                { deutsch: "fahren", past: "fuhr", pastParticiple: "gefahren", japan: "（乗り物で）行く" },
            ],
            otherTitles: [
                { text: "その他", value: "deutsch", aligin: "start", shown: true },
                { text: "訳", value: "japan", shown: true }
            ],
            otherItems: [
                { deutsch: "wie", japan: "どのように" },
                { deutsch: "Wie Bitte?", japan: "何とおっしゃいましたか？" },
                { deutsch: "Buchstabieren Sie bitte.", japan: "スペルを言ってください" },
                { deutsch: "oder", japan: "それとも" },
                { deutsch: "Noch einmal bitte!", japan: "もう一度お願いします" },
                { deutsch: "das", japan: "それ" },
                { deutsch: "Entschuldigung!", japan: "すみません" },
                { deutsch: "Herr", japan: "~さん（男性)" },
                { deutsch: "Frau", japan: "~さん（女性）" },
                { deutsch: "nein", japan: "いいえ" },
                { deutsch: "nicht", japan: "…ない" },
                { deutsch: "aus…", japan: "…から" },
                { deutsch: "woher", japan: "どこから" },
                { deutsch: "auch", japan: "…もまた" },
                { deutsch: "wo", japan: "どこに" },
                { deutsch: "in…", japan: "…に" },
                { deutsch: "PLZ", japan: "郵便番号" },
                { deutsch: "gut", japan: "良い" },
                { deutsch: "Danke, sehr gut.", japan: "とっても良いです" },
                { deutsch: "Gut, danke", japan: "元気ですありがとう" },
                { deutsch: "Ganz gut.", japan: "良いです" },
                { deutsch: "Es geht.", japan: "まぁまぁです" },
                { deutsch: "Nicht so gut.", japan: "あまり良くないです" },
            ]

        }
    },
    computed: {
        shownGreets() {
            return this.greetTitles.filter(h => h.shown == true);
        },
        shownNumbers() {
            return this.numberTitles.filter(h => h.shown == true);
        },
        shownNowns() {
            return this.nownTitles.filter(h => h.shown == true);
        },
        shownVerbs() {
            return this.verbTitles.filter(h => h.shown == true);
        },
        shownOthers() {
            return this.otherTitles.filter(h => h.shown == true);
        },
    }
}
</script>

<style scoped>
</style>
<template>
  <v-app>
    <v-navigation-drawer app clipped v-model="drawer" width>
      <v-container>
        <v-list-item>Iinhalt(もくじ)</v-list-item>
        <v-divider></v-divider>
        <v-list dense nav>
          <v-list-item v-for="unit in units" :key="unit.number">
            <v-list>{{ unit.title }}</v-list>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar color="#008000" app dark clipped-left>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Szenen1 Words</v-toolbar-title>
    </v-app-bar>
    <v-footer color="#a9a9a9" app>参考: Szenen1 heute akutuell 場面で学ぶドイツ語  三修社</v-footer>
  </v-app>
</template>

<script>

export default {
  data(){
    return{
      drawer: null,
      units: [
        {
          number: 1,
          title: "1 Kennenlernen",
          link: "#"
        },
        {
          number: 2,
          title: "2 Länder, Sprachen, Studium",
          link: "#"
        },
        {
          number: 3,
          title: "3 Essen und Trinken",
          link: "#"
        },
        {
          number: 4,
          title: "4 Freizeit und Hobbys",
          link: "#"
        },
        {
          number: 5,
          title: "5 Familie und Berufe",
          link: "#"
        },
        {
          number: 6,
          title: "6 Gegenstände und Einkaufen",
          link: "#"
        },
        {
          number: 7,
          title: "7 Nach den Ferien",
          link: "#"
        },
        {
          number: 8,
          title: "8 Wohnen",
          link: "#"
        },
        {
          number: 9,
          title: "Uhrzeit und Datum",
          link: "#"
        },
        {
          number: 10,
          title: "10 Stadt und Datum",
          link: "#"
        },
        {
          number: 11,
          title: "11 Vor den Ferien",
          link: "#"
        },
        {
          number: 12,
          title: "12 Erlebnisse und Erfahrungen",
          link: "#"
        }
      ]
    }
  }
};
</script>

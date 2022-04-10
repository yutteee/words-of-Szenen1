<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-container>
        <v-list-item>
          <v-list-item-title>Iinhalt(もくじ)</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list nav>
          <v-list-item v-for="unit in units" :key="unit.number" :to="unit.link">
            <v-list>{{ unit.title }}</v-list>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar color="#008000" app dark clipped-left>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title @click="$router.push('/')" style="cursor:pointer">Szenen1 Words</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
      <v-footer color="white">
        <v-card flat tile width="100%" class="text-center">
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon.name"
              class="mx-4"
              icon
              :href="icon.url"
            >
              <v-icon size="24px">
                {{ icon.name }}
              </v-icon>
            </v-btn>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            参考: Szenen1 heute akutuell 場面で学ぶドイツ語  三修社
          </v-card-text>
        </v-card>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script src="https://kit.fontawesome.com/fef103b0c4.js" crossorigin="anonymous"></script>
<script>

export default {
  data(){
    return{
      drawer: false,
      units: [
        {
          number: 1,
          title: "1 Kennenlernen",
          link: "/1"
        },
        {
          number: 2,
          title: "2 Länder, Sprachen, Studium",
          link: "/2"
        },
        {
          number: 3,
          title: "3 Essen und Trinken",
          link: "/3"
        },
        {
          number: 4,
          title: "4 Freizeit und Hobbys",
          link: "/4"
        },
        {
          number: 5,
          title: "5 Familie und Berufe",
          link: "/5"
        },
        {
          number: 6,
          title: "6 Gegenstände und Einkaufen",
          link: "/6"
        },
        {
          number: 7,
          title: "7 Nach den Ferien",
          link: "/7"
        },
        {
          number: 8,
          title: "8 Wohnen",
          link: "/8"
        },
        {
          number: 9,
          title: "9 Uhrzeit und Datum",
          link: "/9"
        },
        {
          number: 10,
          title: "10 Stadt und Datum",
          link: "/10"
        },
        {
          number: 11,
          title: "11 Vor den Ferien",
          link: "/11"
        },
        {
          number: 12,
          title: "12 Erlebnisse und Erfahrungen",
          link: "/12"
        }
      ],
      icons: [
        {
          name: "mdi-github",
          url: "https://github.com/yutteee"
        },
        {
          name: "mdi-twitter",
          url: "https://twitter.com/yutteeelog"
        },
        {
          name: "mdi-card-account-details-outline",
          url: "https://yutteee-portfolio.tk/"
        }
      ],
    }
  },
};
</script>

<style>
p {
  color: #ffa500;
  text-align: center;
  font-size: 32px;
}
</style>

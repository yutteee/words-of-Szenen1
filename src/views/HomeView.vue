<template>
<v-container>
  <p>Szenen1 heute aktuell 場面で学ぶドイツ語</p>
  <v-row>
    <v-col v-for="list in lists" :key="list.name" cols="12" md="6" sm="6" lg="4">
      <v-hover v-slot="{ hover }">
        <v-card dark :to="list.url" :elevation="hover ? 10 : 0" :class="{ 'on-hover': hover }">
          <v-img :src="list.img" :aspect-ratio="3/2" :elevation="hover ? 10 : 0">
            <v-card-title>{{ list.title }}</v-card-title>
          </v-img>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
  export default {
    data() {
      return {
        lists: [
          {
            title: "1 Kennenlernen",
            img: require("../assets/meet.png"),
            url: "/1"
          },
          {
            title: "2 Länder, Sprachen, Studium",
            img: require("../assets/class.png"),
            url: "/2"
          },
          {
            title: "3 Essen und Trinken",
            img: require("../assets/food.png"),
            url: "/3"
          },
          {
            title: "4 Freizeit und Hobbys",
            img: require("../assets/hobby.png"),
            url: "/4"
          },
          {
            title: "5 Familie und Berufe",
            img: require("../assets/family.png"),
            url: "/5"
          },
          {
            title: "6 Gegenstände und Einkaufen",
            img: require("../assets/shop.png"),
            url: "/6"
          },
          {
            title: "7 Nach den Ferien",
            img: require("../assets/vacation.png"),
            url: "7"
          },
          {
            title: "8 Wohnen",
            img: require("../assets/home.png"),
            url: "/8"
          },
          {
            title: "9 Uhrzeit und Datum",
            img: require("../assets/time.png"),
            url: "/9"
          },
          {
            title: "10 Stadt und Datum",
            img: require("../assets/street.png"),
            url: "/10"
          },
          {
            title: "11 Vor den Ferien",
            img: require("../assets/schedule.png"),
            url: "/11"
          },
          {
            title: "12 Erlebnisse und Erfahrungen",
            img: require("../assets/experience.png"),
            url: "/12"
          },
        ],
      }
    }
  }
</script>

<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.8;
 }

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
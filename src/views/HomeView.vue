<template>
<v-container>
  <p>Szenen1 heute aktuell 場面で学ぶドイツ語</p>
  <v-row>
    <v-col v-for="list in lists" :key="list.name" cols="4">
      <v-card dark>
        <v-img :src="list.img" :aspect-ratio="3/2">
          <v-card-title>{{ list.title }}</v-card-title>
        </v-img>
      </v-card>
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
            url: "#"
          },
          {
            title: "2 Länder, Sprachen, Studium",
            img: require("../assets/class.png"),
            url: "#"
          },
          {
            title: "3 Essen und Trinken",
            img: require("../assets/food.png"),
            url: "#"
          },
          {
            title: "4 Freizeit und Hobbys",
            img: require("../assets/hobby.png"),
            url: "#"
          },
          {
            title: "5 Familie und Berufe",
            img: require("../assets/family.png"),
            url: "#"
          },
          {
            title: "6 Gegenstände und Einkaufen",
            img: require("../assets/shop.png"),
            url: "#"
          },
          {
            title: "7 Nach den Ferien",
            img: require("../assets/vacation.png"),
            url: "#"
          },
          {
            title: "8 Wohnen",
            img: require("../assets/home.png"),
            url: "#"
          },
          {
            title: "9 Uhrzeit und Datum",
            img: require("../assets/time.png"),
            url: "#"
          },
          {
            title: "10 Stadt und Datum",
            img: require("../assets/street.png"),
            url: "#"
          },
          {
            title: "11 Vor den Ferien",
            img: require("../assets/schedule.png"),
            url: "#"
          },
          {
            title: "12 Erlebnisse und Erfahrungen",
            img: require("../assets/experience.png"),
            url: "#"
          },
        ]
      }
    }
  }
</script>

<style scoped>
p {
  color: #ffa500;
  text-align: center;
  font-size: 32px;
}
</style>
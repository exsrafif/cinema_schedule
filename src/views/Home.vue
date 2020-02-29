<template>
  <div class="container mb-2 pb-2">
    <div class="jumbotron mb-3">
      <h1 class="display-4">Cinépolis Malang Town Square</h1>
      <p class="lead">Jangan lewatkan film-film terbaru hanya di Cinépolis</p>
      <hr class="my-4" />
      <p>
        Cinépolis bertujuan untuk memberikan penontonnya pengalaman terbaik dalam hiburan menonton, dan memiliki tenaga kerja lebih dari 39,185 orang di seluruh dunia untuk mendukung misi perusahaan. Saat ini Cinépolis telah memposisikan dirinya sebagai jaringan bioskop kedua terbesar di dunia dalam hal penonton, beroperasi di 691 kompleks bioskop dengan 5,609 layar dan menghibur lebih dari 338 juta penonton setiap tahunnya dengan kehadiran global di 17 negara.
      </p>
      <p class="lead">
        <router-link class="btn btn-primary" to="/about">Learn More</router-link>
      </p>
    </div>

    <div class="row mt-4" v-for="(data, index) in filmRow" :key="index">
      <div class="col-md-3" v-for="(datas, index) in data" :key="index">
        <router-link :to="{ name: 'Come', params: { id: datas.id } }">
          <img :src="datas.image" class="img-thumbnail" :alt="datas.name" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
var chunk = require("chunk");
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  computed: {
    film() {
      return this.$store.getters.getAllData;
    },
    filmRow() {
      return chunk(this.$store.getters.getAllData, 4);
    }
  },
  methods: {}
};
</script>

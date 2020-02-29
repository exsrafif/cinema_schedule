<template>
  <div class="container">
    <div class="row justify-content-md-center mt-5 pt-3">
      <div class="col-md-3">
        <img :src="detailMovie.image" :alt="detailMovie.name" class="img-thumbnail" />
      </div>
      <div class="col-md-7">
        <div class="card">
          <div class="card-header">
            <h4>
              {{detailMovie.name}}
              <span class="badge badge-primary">New</span>
            </h4>
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>Genres : {{detailMovie.genres}}</p>
              <p>Director : {{detailMovie.director}}</p>
              <p>Script : {{detailMovie.script}}</p>
              <p>Studios : {{detailMovie.studios}}</p>
              <p>Duration : {{detailMovie.duration}}</p>
            </blockquote>
          </div>
        </div>
        <hr class="divider" />
        <div class="alert alert-light">
          <h5 class="alert-heading">Synopsis</h5>
          <hr />
          <h6 class="font-weight-light mb-0">{{detailMovie.synopsis}}</h6>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return { detailMovie: null };
  },
  created() {
    if (this.$route.params.id) {
      this.detailMovie = this.$store.getters.getDataById(this.$route.params.id);
    }
  }
};
</script>

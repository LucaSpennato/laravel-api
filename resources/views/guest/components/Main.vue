<template>
  <main>
    <div class="container">
        <div class="row">
            <card v-for="post in posts" :key="post.id" :post="post"/>
        </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import card from './main-components/card.vue';

export default {
    components:{
        card,
    },

    data: function(){
    return{
      posts: [],
      url: 'http://127.0.0.1:8000/api/',
      topic : 'posts',
      currentPage: 1,
      nextPage: '',
      previousPage: '',
    }
  },

  methods:{
    getPosts(){
      axios.get(this.url + this.topic, {
        params:{
          page : this.currentPage
          }
        })
      .then((response) => {
        console.warn(response.data.results.data);
        this.posts = response.data.results.data;
      }).catch((error) =>{
        console.error(error);
      })
    }
  },

  created(){
    this.getPosts();
  },
}
</script>

<style lang="scss">

</style>
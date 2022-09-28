<template>
  <main>
    <div class="container">
        <div class="row" v-if="arePosts">
          <h1>
            Posts:
          </h1>
            <card v-for="post in posts" :key="post.id" :post="post"/>
        </div>
        <div class="row" v-else>
          <h1>
            Tags:
          </h1>
          <TagsCard />
        </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import card from './main-components/card.vue';
import TagsCard from './main-components/TagsCard.vue';

export default {
    components:{
        card,
        TagsCard,
    },

    computed: {
      arePosts: function(){
        if(this.topic === "posts"){
          return true;
        }
        return false;
      },
    },

    data: function(){
    return{
      posts: [],
      url: 'http://127.0.0.1:8000/api/',
      topic : 'tags',
      currentPage: 1,
      nextPage: '',
      previousPage: '',
    }
  },

  methods:{
    getPosts(){
      axios.get(this.url + this.topic,
        {
        params:{
          page : this.currentPage
          }
        }
        )
      .then((response) => {
        console.warn(response.data.results);
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
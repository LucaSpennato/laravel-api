<template>
  <main>
    <div class="container" v-if="isLoaded">
      <div class="row">

        <div class="col-4">
          <label for="call">Select the call</label>
          <select class="form-select" id="call" v-model="topic" @change="modify()">
            <option>posts</option>
            <option>tags</option>
          </select>
        </div>
      </div>

        <div class="row" v-if="arePosts">
          <h1>
            Posts:
          </h1>
            <card v-for="(post, index) in posts" :key="index" :post="post"/>
        </div>
        <div class="row" v-else>
          <h1>
            Tags:
          </h1>
          <TagsCard v-for="tag in tags" :key="tag.id" :tag="tag"/>
        </div>
    </div>
    <div class="text-center text-warning display-1" v-else>
      Caricamento
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
        }else{
          return false;
        }
      },
    },

    data: function(){
    return{
      posts: [],
      tags: [],
      url: 'http://127.0.0.1:8000/api/',
      topic : 'posts',
      currentPage: 1,
      nextPage: '',
      previousPage: '',
      isLoaded: false,
    }
  },

  methods:{

    modify(){
      if(this.arePosts === true){
        this.getPosts();
      }else{
        this.getTags();
      }
    },
   
    getTags(){
      axios.get(this.url + this.topic,
      )
      .then((response) => {
        console.log(this.topic);
        console.warn(response.data);
        this.tags = response.data.results;
        this.isLoaded = true;
        
      }).catch((error) =>{
        console.error(error);
      })
    },
    getPosts(){
      axios.get(this.url + this.topic,
      )
      .then((response) => {
        console.log(this.topic);
        console.warn(response.data.results.data);
        this.posts = response.data.results.data;
        this.isLoaded = true;

      }).catch((error) =>{
        console.error(error);
      })
    },

    
  },

  created(){
    this.getTags();
    this.getPosts();
  },
}
</script>

<style lang="scss">

</style>
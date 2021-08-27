<template>
  <div id="app">
    <div class="wrapper">
      <div class=" header container">
        <h1>Тестовый блог для Hybrid.ai</h1>
          <vs-button
            gradient
            style="min-width: 130px"
            success
            animation-type="scale"
            @click="isActiveAddPost = true"
          >
            <i class='bx bx-plus' ></i>
            <template #animate >
              Добавить запись
            </template>
          </vs-button>
      </div>

      <div class="posts">
        <Post v-for="item in getAllPosts"
        :key="item.id"
        :item="item"
        @click.native="showPost(item.id)"></Post>
      </div>

      <AddPost :isActiveAddPost="isActiveAddPost" @close="isActiveAddPost = false"></AddPost>
      <DetailsPost :isShowDetailsPost="detailsPost.isShow" :post="detailsPost.item" @close="detailsPost.isShow = false"></DetailsPost>
    </div>
  </div>
</template>

<script>
import Post from './components/Post.vue';
import AddPost from './components/AddPost.vue';
import DetailsPost from './components/DetailsPost.vue';

export default {
  name: 'App',
  data:() => ({
    isActiveAddPost: false,
    detailsPost: {
      isShow: false,
      item: null
    }
  }),
  components: {
    Post,
    AddPost,
    DetailsPost
  },
  computed: {
    getAllPosts(){
      return this.$store.getters.allPost;
    }
  },
  methods: {
    showPost(payload){
      this.detailsPost.isShow = true;
      this.detailsPost.item = this.$store.getters.findPost(payload);
    }
  }
}
</script>

<style lang="scss">
  @import './assets/css/normilize.css';

  * {
    box-sizing: border-box;
  }

  html, body{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    color: #2c3e50;
    background: #f5f5f5;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    display: block;
  }

  ::-webkit-scrollbar-thumb {
    background: #313043;
    border-radius: 5px;
  }

  .wrapper{
    max-width: 1000px;
    height: 100vh;
    margin: 0 auto;
    padding: 5px 35px;
  }

  .container{
    width: 100%;
    background: #fff;
    padding: 15px;
    margin-bottom: 10px;
  }

  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .posts{
    background: #fff;
  }

  .vs-card__img{
    max-width: 30%;
  }

  .vs-card-content.type-3 .vs-card{
    max-width: 100% !important;
  }

  .vs-dialog__close{
    background: #fff !important;
  }

</style>
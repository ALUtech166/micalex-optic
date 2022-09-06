<template>
     <div class="header">
          <h1 class="titre">Blog</h1>
     </div>


     <div class="container">
          <div class="blog">
               <template v-if="posts && posts.length">
                    <div class="row" v-for="post of posts" :key="post.id">
                         <div class="col-lg-6">
                              <img class="image img-fluid" src="../assets/Images/12Micalex.jpg" alt="Pray" />
                         </div>
                         <div class="col-lg-6">
                              <div class="description">
                                   <h2>
                                        {{ post.attributes.Title }}
                                   </h2>
                                   <span><strong>{{ post.attributes.Date }}</strong></span>
                                   <p>
                                        {{ post.attributes.Content }}
                                   </p>

                                   <router-link to="#" type="button" class="btn btn-outline-primary">Voir Plus
                                   </router-link>
                              </div>
                         </div>


                    </div>
               </template>
          </div>
     </div>
</template>

<script>
     import axios from 'axios'
     import config from '../../config.js'

     export default {
          data() {
               return {
                    config,
                    posts: [],
                    errors: []

               }
          },

          created() {
               axios.get(`/posts?populate=*`)
                    .then(response => {
                         this.posts = response.data.data
                         console.log()

                    })
                    .catch(e => {
                         this.errors.push(e)
                    })

          }

     }
</script>

<style lang="scss" scoped>
     .row {
          padding: 10px;

     }



     .blog {
          padding: 20px;
     }

     .description {
          padding: 20px;
          font-size: 17px;
          font-family: 'Jost', sans-serif;
     }

     .image {
          border-radius: 5px;
          box-shadow: 0 5px 10px #0005;

     }

     h2 {
          font-size: 25px;
          font-weight: bold;
          font-family: 'Jost', sans-serif;
          text-transform: uppercase;
     }

     span {
          font-family: 'Jost', sans-serif;
          color: #001D6E;
          font-weight: bold;
     }

     .btn-outline-primary {
          border: 1px solid #001D6E;
          color: #001D6E;
     }

     .btn-outline-primary:hover {
          background-color: #001D6E;
          border: 1px solid #001D6E;
          color: #fff;
     }

     .btn:hover {
          background-color: #001D6E;
          border: 1px solid #001D6E;
     }

     .btn:active {
          background-color: #001D6E;
          border: 1px solid #001D6E;
     }

     h3,
     p {
          font-family: 'Jost', sans-serif;
          text-align: justify;
     }

     .header {
          height: 40vh;
          background-image:
               url(../assets/Ok-4.png);
          background-size: cover;
          background-position: top;
          position: relative;


     }


     .titre {
          top: 50%;
          right: 60%;
          position: absolute;
          color: #fff;
          font-weight: bold;
          font-size: 40px;
          text-transform: uppercase;


          @media (max-width: 550px) {
               font-size: 25px;
               padding: 10px;
          }

     }
</style>
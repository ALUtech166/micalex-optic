<template>
     <div class="header">
          <h1 class="titre">Galerie</h1>
     </div>

     <section class="products">
          <div>
               <h1>Notre Galerie</h1>
               <div class="row" v-if="galeries && galeries.length">
                    <div class="col-lg-3" v-for="galerie of galeries" :key="galerie.id">
                         <img class="img-fluid" :src="`${config.backend_url}${galerie.data.attributes.images.data.attributes.url}`"
                              alt="">
                    </div>
               </div>
               <div class="row">
                    <div class="col-lg-3">
                         <img class="img-fluid" src="../assets/Images/33Micalex.jpg" alt="">
                    </div>
                    <div class="col-lg-3">
                         <img class="img-fluid" src="../assets/Images/17Micalex.jpg" alt="">
                    </div>
                    <div class="col-lg-3">
                         <img class="img-fluid" src="../assets/Images/33Micalex.jpg" alt="">
                    </div>
                    <div class="col-lg-3">
                         <img class="img-fluid" src="../assets/Images/17Micalex.jpg" alt="">
                    </div>
               </div>
               <div class="row">
                    <div class="col-lg-3">
                         <img class="img-fluid" src="../assets/Images/26Micalex.jpg" alt="">
                    </div>
                    <div class="col-lg-3">
                         <img class="img-fluid" src="../assets/Images/27Micalex.jpg" alt="">
                    </div>
                    <div class="col-lg-3">
                         <img class="img-fluid" src="../assets/Images/28Micalex.jpg" alt="">
                    </div>
                    <div class="col-lg-3">
                         <img class="img-fluid" src="../assets/Images/25Micalex.jpg" alt="">
                    </div>
               </div>
          </div>
     </section>

</template>
<script>
     import axios from 'axios'
     import config from '../../config.js'

     export default {
          data() {
               return {
                    config,
                    galeries: [],
                    errors: []

               }
          },

          created() {
               axios.get(`/galerie?populate=*`)
                    .then(response => {
                         this.galeries = response.data
                         console.log()

                    })
                    .catch(e => {
                         this.errors.push(e)
                    })

          }

     }
</script>




<style lang="scss" scoped>
     .products {
          padding: 20px;
          background-color: #CFD2CF;
          text-align: center;

          img {
               border-radius: 5px;
               box-shadow: 0 5px 10px #0005;
          }

          h1 {
               text-align: center;
               text-transform: uppercase;
               font-size: 25px;
               padding: 5px;
               font-family: 'Jost', sans-serif;
               color: #001D6E;
               font-weight: bold;
          }

          h3 {
               font-size: 25px;
               font-weight: 400;
               font-family: 'Jost', sans-serif;
               line-height: 25px;
               padding: 10px;
               color: #001D6E;
               font-weight: bold;


          }

          .row {
               padding: 10px;

               .col-lg-3 {
                    padding: 5px;
               }
          }

     }


     img {
          border-radius: 8px;
          box-shadow: 0 5px 10px #0005;

     }

     img {

          transition: transform .5s;

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


     @keyframes moveInLeft {
          0% {
               opacity: 0;
               transform: translateX(-100px);
          }


          80% {
               transform: translateX(10px);
          }


          100% {
               opacity: 1;
               transform: translate(0) rotate(180deg);
          }
     }



     @keyframes moveInRight {
          0% {
               opacity: 0;
               transform: translateX(100px) rotate(0deg);
          }

          80% {
               transform: translateX(-20px);
          }

          100% {
               opacity: 1;
               transform: translate(0);
          }
     }

     @keyframes moveInBottom {
          0% {
               opacity: 0;
               transform: translateY(30px);
          }

          100% {
               opacity: 1;
               transform: translate(0);
          }
     }

     .title {
          max-width: 90rem;
          padding: 1rem;

     }




     .image {
          border-radius: 10px;

     }
</style>
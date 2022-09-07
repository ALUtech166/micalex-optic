<template>

     <div class="header">
          <h1 class="titre">CONTACTEZ NOUS</h1>
     </div>


     <!--Google Maps-->
     <div class="pre-header">
          <h1>Nos Adresses</h1>
     </div>


     <div class="map">
          <div class="row">
               <div class="col-lg-6">
                    <!-- <h1>Dekon en face de NSIA BANK sur les pavés avant le feu rouge</h1> -->
                    <!-- <img class="image img-fluid" src="../assets/Images/12Micalex.jpg" alt="Pray" /> -->
                    <div class="infos">
                         <p>
                              <i class="fa fa-home" aria-hidden="true"></i> <em>Adresse</em> <span>Dekon en face de NSIA
                                   BANK sur les pavés avant le feu rouge</span>
                         </p>
                         <p>
                              <i class="fa fa-phone" aria-hidden="true"></i> <em>Numero</em> <span>+228 99710751</span>
                         </p>
                         <p>
                              <i class="fa fa-envelope" aria-hidden="true"></i> <em>Email</em>
                              <span>dekon@micalexoptique.com</span>
                         </p>
                    </div>


                    <div class="mapouter">
                         <div class="gmap_canvas"><iframe id="gmap_canvas" width="100%" height="475"
                                   src="https://maps.google.com/maps?q=Rue%20275,%20Lom%C3%A9%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                   frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

                         </div>

                    </div>
               </div>
               <div class="col-lg-6">
                    <!-- <h1>Immeuble Marina Bay à côté de la pharmacie Jeanne d’Arc</h1> -->
                    <div class="infos">
                         <p>
                              <i class="fa fa-home" aria-hidden="true"></i> <em>Adresse</em> <span>Immeuble
                                   Marina Bay à côté de la pharmacie Jeanne d’Arc</span>
                         </p>
                         <p>
                              <i class="fa fa-phone" aria-hidden="true"></i> <em>Numero</em> <span>+228 99710751</span>
                         </p>
                         <p>
                              <i class="fa fa-envelope" aria-hidden="true"></i> <em>Email</em>
                              <span>plage@micalexoptique.com</span>
                         </p>
                    </div>


                    <div class="mapouter">
                         <div class="gmap_canvas"><iframe id="gmap_canvas" width="100%" height="475"
                                   src="https://maps.google.com/maps?q=Rue%20275,%20Lom%C3%A9%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                   frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

                         </div>

                    </div>
               </div>
          </div>
     </div>




     <div class="pre-header">
          <h1>Contactez Nous</h1>
     </div>

     <div class="about">

          <div class="">
               <div class="form">

                    <div class="row">
                         <div class="col-lg-6">
                              <FormUI></FormUI>
                         </div>

                         <div class="col-lg-6">
                              <img class="img-fluid" src="../assets/Images/21Micalex.jpg" alt="">
                         </div>
                    </div>

               </div>
               <br>

          </div>


     </div>



</template>

<script>
     import FormUI from '@/components/UI/FormUI.vue';

     export default {
          components: {
               FormUI,
          }
     }
</script>



<style lang="scss" scoped>
     .fa,
     em {
          color: #001D6E;
          font-weight: bold;
          padding: 5px;
          
     }

     span {
          padding: 15px;
          font-family: 'Jost', sans-serif;
          font-weight: bold;
          font-size: 15px;
          text-align: justify;
     }

     img {
          height: 100%;
     }

     .infos {
          text-align: center;
          padding: 10px;
     }

     .pre-header {
          text-align: center;
          padding: 10px;

          h1 {
               text-align: center;
               text-transform: uppercase;
               font-size: 25px;
               padding: 5px;
               font-family: 'Jost', sans-serif;
               color: #001D6E;
               font-weight: bold;
          }

          p {
               text-align: center;
               font-family: 'Jost', sans-serif;
          }
     }

     .about {
          background-color: #fff;
     }

     .map {
          padding: 20px;

          h1 {
               text-align: center;
               text-transform: uppercase;
               font-size: 20px;
               padding: 5px;
               font-family: 'Jost', sans-serif;
               color: #001D6E;
               font-weight: bold;
          }


     }

     .sub-title {
          border: 2px solid #001D6E;
          height: 90%;
          border-radius: 5px;
          padding: 20px;
          background-color: rgba(255, 255, 255, 0.496);

          .social-media {
               padding: 30px;

               li {
                    font-size: 25px;
                    color: #001D6E;
                    font-family: 'Jost', sans-serif;
                    padding: 10px;
               }
          }
     }

     h2 {
          font-size: 20px;
     }

     .form {
          margin: 0.5rem;
          max-width: 100vw;
          padding: 3rem;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
     }

     a {
          text-decoration: none;
          font-size: 15px;
     }

     p {
          text-align: justify;
          font-family: 'Jost', sans-serif;
          font-size: 20px;
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
               font-size: 20px;
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
          border-radius: 3px;

     }
</style>
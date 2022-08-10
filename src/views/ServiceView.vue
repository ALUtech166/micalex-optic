<template>
     <div class="header">
          <h1 class="titre">Nos Services</h1>
     </div>
     <div class="service">

          <div class="container">
               <section class="vente">
                    <div class="description">
                         <h1>Vente</h1>
                         <hr>
                         <p> Chez nous à Micalex Optique, votre vision est notre priorité et nous mettons tout en œuvre
                              pour répondre à tous vos besoins car la vue,c’est la vie . Nous proposons des produits et
                              services sur mesure et selon vos besoins exprimés. Les collections que nous vous offrons
                              sont toutes sélectionnées avec le plus grand soin.
                              Comme toutes autres lunetteries Micalex Optique offre:

                         </p>
                    </div>
               </section>

          </div>


     </div>


     <section class="offre">
          <div class="paragraph">

               <p>
                    Des verres correcteurs de qualité et en amincis pour des forts puissances (verres progressifs,
                    unifocaux, bifocaux...)
                    Des lentilles de contact et leurs produits d’entretien, accessoires d’optique: étuis, chainettes,
                    cordons, nettoyants...
               </p>
          </div>

     </section>

     <div class="container">
          <section class="entretien">

               <div class="desc">
                    <p>
                         Des verres correcteurs de qualité et en amincis pour des forts puissances (verres progressifs,
                         unifocaux, bifocaux...)
                         Des lentilles de contact et leurs produits d’entretien, accessoires d’optique: étuis,
                         chainettes,
                         cordons, nettoyants...
                    </p>

                    <h1>Traitement & Entretien</h1>
                    <hr>
                    <p>
                         Des verres correcteurs de qualité et en amincis pour des forts puissances (verres progressifs,
                         unifocaux, bifocaux...)
                         Des lentilles de contact et leurs produits d’entretien, accessoires d’optique: étuis,
                         chainettes,
                         cordons, nettoyants...
                    </p>
               </div>
          </section>
     </div>





</template>

<script>


</script>



<style lang="scss" scoped>
     .service {
          padding: 35px;

          @media (min-width: 550px) {

               padding: 25px;
          }

          .description {

               h1 {
                    color: #001D6E;
                    font-weight: bold;
                    font-size: 45px;
                    text-transform: uppercase;
               }

               hr {
                    border: 2px solid #001D6E;
                    background-color: #001D6E;
                    color: #001D6E;
               }
          }
     }

     .offre {
          background-image: url("../assets/Ok-3.png");
          background-size: cover;
          height: 50vh;


          .paragraph {
               text-align: left;

               @media (min-width: 550px) {

                    padding: 25px;
               }


               p {
                    text-align: left;
                    color: #fff;



                    @media (min-width: 550px) {
                         width: 50%;
                         padding: 25px;
                    }
               }
          }
     }

     .entretien {
          padding: 25px;

          @media (min-width: 550px) {
               padding: 25px;


          }

          .desc {


               h1 {
                    color: #001D6E;
                    font-weight: bold;
                    font-size: 45px;
                    text-transform: uppercase;
               }

               hr {
                    border: 2px solid #001D6E;
                    background-color: #001D6E;
                    color: #001D6E;
                    font-weight: bold;
               }
          }
     }

     a {
          text-decoration: none;
          font-size: 15px;
     }

     p {
          text-align: justify;
          font-family: 'Jost';
          font-size: 20px;
     }

     .header {
          height: 50vh;
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
          font-size: 45px;
          text-transform: uppercase;

          @media (max-width: 550px) {
               font-size: 30px;
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
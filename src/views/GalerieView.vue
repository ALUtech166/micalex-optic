<template>
     <div class="header">
          <h1 class="titre">Galerie</h1>
     </div>

     <section class="products">
          <div>
               <h1>Notre Galerie</h1>
               <div class="row">
                    <div class="col-lg-3">
                         <img class="img-fluid" src="../assets/Micalex/Ok-1.png" alt="">
                    </div>
                    <div class="col-lg-3">
                         <img class="img-fluid" src="../assets/Micalex/Ok-2.png" alt="">
                    </div>
                    <div class="col-lg-3">
                         <img class="img-fluid" src="../assets/Micalex/Ok-3.png" alt="">
                    </div>
                    <div class="col-lg-3">
                         <img class="img-fluid" src="../assets/Micalex/Ok-4.png" alt="">
                    </div>
               </div>
               <div class="row">
                    <div class="col-lg-3">
                         <img class="img-fluid" src="../assets/Micalex/Ok-1.png" alt="">
                    </div>
                    <div class="col-lg-3">
                         <img class="img-fluid" src="../assets/Micalex/Ok-2.png" alt="">
                    </div>
                    <div class="col-lg-3">
                         <img class="img-fluid" src="../assets/Micalex/Ok-3.png" alt="">
                    </div>
                    <div class="col-lg-3">
                         <img class="img-fluid" src="../assets/Micalex/Ok-4.png" alt="">
                    </div>
               </div>
          </div>
     </section>

</template>

<script>


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
               padding: 5px;
          }

     }


     img {
          border-radius: 15px;
          box-shadow: 0 5px 10px #0005;

     }

     img:hover {
          transform: translateY(25px);
          transition: 1s ease-in-out;

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
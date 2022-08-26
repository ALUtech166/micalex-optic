<template>
     <div class="header">
          <h1 class="titre">Prenez un rendez-vous</h1>
     </div>

     <div class="about">
          <div class="login">
               <div class="container">
                    <div class="pre-header">
                         <h1>Prenez un rendez-vous</h1>
                         <p>Vous pouvez simplement remplir le formulaire ci-dessous et cliquer sur « Envoyer » pour
                              soumettre une demande.
                         </p>
                         <p>
                              Notre équipe du service clientèle prendra contact avec vous dans
                              les 3 jours ouvrables.
                         </p>
                    </div>

                    <div class="form-signin">


                         <div class="row">
                              <div class="col-lg-6">
                                   <form @submit="register" method="post">
                                        <div class="mb-3">
                                             <label for="name" class="form-label">Nom*</label>
                                             <input type="text" class="form-control" id="name" v-model="register.nom"
                                                  required>
                                        </div>
                                        <div class="mb-3">
                                             <label for="name" class="form-label">Prenom*</label>
                                             <input type="text" class="form-control" id="name" v-model="register.prenom"
                                                  required>
                                        </div>
                                        <div class="mb-3">
                                             <label for="email" class="form-label">Email*</label>
                                             <input type="email" class="form-control" id="email"
                                                  v-model="register.email" required>
                                        </div>
                                        <div class="mb-3">
                                             <label for="number" class="form-label">Telephone*</label>
                                             <input type="text" class="form-control" id="number"
                                                  v-model="register.telephone" required>
                                        </div>
                                        <div class="mb-3">
                                             <label for="number" class="form-label">Les Ordonnances*</label>
                                             <input type="file" class="form-control" id="number" required>
                                        </div>
                                        <div class="mb-3">
                                             <label for="" class="form-label">Message</label>
                                             <textarea name="message" id="message" class="form-control"
                                                  placeholder="Le message" rows="5" required=""></textarea>
                                        </div>


                                        <button type="submit" class="btn btn-warnings w-100">

                                             <span v-if="loadings.register">Chargement.....</span>
                                             <span v-if="!loadings.register">Envoyer</span>

                                        </button>
                                   </form>
                              </div>

                              <div class="col-lg-6">
                                   <img src="../assets/Images/21Micalex.jpg" alt="">
                              </div>
                         </div>
                    </div>

               </div>
          </div>

     </div>



</template>

<script>
     export default {
          layout: "karaevents",
          data() {
               return {
                    loadings: {
                         register: false,
                    },
                    register: {
                         nom: '',
                         prenom: '',
                         email: '',
                         telephone: '',
                         password: ''
                    }
               }
          },
          methods: {

          }

     }
</script>



<style lang="scss" scoped>
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
               font-size: 16px;
          }
     }

     .flex {
          display: flex;
          justify-content: space-between;
     }

     img {
          width: 100%;
          height: 100%;
     }

     .login {
          padding: 15px;
     }

     .form-signin {
          width: 100%;
          height: 100%;
          padding: 25px;
          font-family: 'Jost', sans-serif;
          border-radius: 5px;
          box-shadow: 0 5px 10px #0005;
          background-color: #fff;
     }

     label {
          font-family: 'Jost', sans-serif;
          font-weight: bold;
     }

     .btn-warnings {
          background-color: #001D6E;
          color: #fff;


     }

     .btn-warnings:hover {
          background-color: #001D6E;
          color: #fff;


     }



     form {
          max-width: 100%;
          padding: 25px;
          background-color: #fff;
          font-family: 'Jost', sans-serif;

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
          font-size: 40px;
          text-transform: uppercase;

          @media (max-width: 550px) {
               font-size: 25px;
               padding: 15px;
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
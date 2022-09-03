<template>
     <div class="footer">
          <div class="container">
               <div class="row">
                    <div class="col-lg-3">
                         <img class="img-fluid" src="../assets/logo.png" alt="">
                         <p>
                              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                              Aut accusamus labore praesentium
                              debitis beatae similique quia autem assumenda totam
                         </p>
                    </div>

                    <div class="col-lg-3">
                         <h1>Liens Utiles</h1>
                         <ul>
                              <li>
                                   <router-link class="link" to="/">Acceuil</router-link>
                              </li>
                              <li>
                                   <router-link class="link" to="/a-propos">A propos</router-link>
                              </li>
                              <li>
                                   <router-link class="link" to="/service">Services</router-link>
                              </li>
                              <li>
                                   <router-link class="link" to="/galerie">Galerie</router-link>
                              </li>
                         </ul>
                    </div>
                    <div class="col-lg-3">
                         <h1>Contacts</h1>
                         <ul>
                              <li>contact@micalexoptique.com</li>
                              <li>+22893658616/+228 99710751/+228 93658894</li>
                              <li>
                                   Lomé au quartier Dekon, en face de la Banque NSIA
                              </li>

                             <!--  <li>
                                   Immeuble Marina Bay à côté de la pharmacie Jeanne d’Arc
                              </li> -->
                         </ul>
                    </div>
                    <div class="col-lg-3">
                         <h1>Reseaux Sociaux</h1>
                         <ul>
                              <li><i class="fab fa-facebook"></i>
                                   <router-link class="link" to="https://www.facebook.com/Micalexoptique"> Micalex Optique</router-link>
                              </li>
                              <li><i class="fab fa-instagram"></i>
                                   <router-link class="link" to="https://www.instagram.com/micalex_optique/"> Micalex Optique</router-link>
                              </li>
                              <li><i class="fab fa-linkedin"></i>
                                   <router-link class="link" to="https://www.linkedin.com/company/micalex-optique/"> Micalex Optique</router-link>
                              </li>
                         </ul>
                    </div>
               </div>
          </div>

          <hr>

          <div class="copyright">
               <div class="text-center">
                    <a class="social-media" href="https://www.facebook.com/Micalexoptique"><i class="fab fa-facebook"></i></a>
                    <a class="social-media" href="https://www.instagram.com/micalex_optique/"><i class="fab fa-instagram"></i></a>
                    <a class="social-media" href="https://www.linkedin.com/company/micalex-optique/"><i class="fab fa-linkedin"></i></a>
                    <p>&copy; Copyright 2022 Micalex Optique. developé par <a href="http://www.mekengroup.com" target="_blank" rel="noopener noreferrer">MEG</a></p>
               </div>
          </div>
     </div>
</template>

<script>
     export default {

     }
</script>

<style lang="scss" scoped>

     .footer {
          padding: 30px;
          background-color: #001D6E;

          p,
          h1,
          li {
               color: #fff;
               font-family: 'Jost', sans-serif;
               font-weight: 500;
               text-align: justify;

          }

          p {
               font-size: 15px;
               font-family: 'Jost', sans-serif;
          }

          .col-lg-4 {
               padding: 5px;
          }

          ul,
          li {
               font-size: 17px;
               font-family: 'Jost', sans-serif;
               font-weight: 900;

          }

          .link {
               text-decoration: none;
               color: #fff;
               font-family: 'Jost', sans-serif;
          }


          h1 {
               text-transform: uppercase;
               font-size: 20px;
               font-family: 'Jost', sans-serif;
               

          }

          hr {
               border: 0.5px solid white;
               color: #fff;
               background-color: #fff;
          }

          .copyright {
               padding: 5px;
               
               p {
                    font-family: 'Jost', sans-serif;
                    font-weight: 600;
                    text-align: center;
               }

               a {
                    text-decoration: none;
                    font-family: 'Jost', sans-serif;
                    font-weight: 900;
                    padding: 2px;
               }

               .social-media {
                    color: #fff;
                    padding: 2px;
               }
          }
     }
</style>
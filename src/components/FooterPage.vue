<template>
     <div class="footer">
          <div class="container">
               <div class="container row">
                    <div class="col-lg-4">
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
                    <div class="col-lg-4">
                         <h1>Dekon</h1>
                         <ul>
                              <li>
                                   <i class="fa fa-home" aria-hidden="true"></i>
                                   Lomé au quartier Dekon, <br>
                                   en face de la Banque NSIA
                              </li>
                              <li><i class="fa fa-phone" aria-hidden="true"></i> Contact: +228 99710751</li>
                              <li><i class="fa fa-phone" aria-hidden="true"></i> Bureau: +228 99710751 | 90710751</li>
                              <li><i class="fa fa-envelope" aria-hidden="true"></i> contact@micalexoptique.com</li>




                              <!--  <li>
                                   Immeuble Marina Bay à côté de la pharmacie Jeanne d’Arc
                              </li> -->
                         </ul>
                    </div>
                    <div class="col-lg-4">
                         <h1>Plage</h1>
                         <ul>
                              <li>
                                   <i class="fa fa-home" aria-hidden="true"></i>
                                   Immeuble Marina Bay à côté <br>
                                   de la pharmacie Jeanne d’Arc
                              </li>
                              <li><i class="fa fa-phone" aria-hidden="true"></i> Contact: +228 99710751</li>
                              <li><i class="fa fa-phone" aria-hidden="true"></i> Bureau: +228 99710751 | 90710751</li>
                              <li><i class="fa fa-envelope" aria-hidden="true"></i> contact@micalexoptique.com</li>




                              <!--  <li>
                                   Immeuble Marina Bay à côté de la pharmacie Jeanne d’Arc
                              </li> -->
                         </ul>
                    </div>
                    <!-- <div class="col-lg-4">
                         <h1>Reseaux Sociaux</h1>
                         <ul>
                              <li><i class="fab fa-facebook"></i>
                                   <router-link class="link" to="https://www.facebook.com/Micalexoptique" target="blank"> Micalex
                                        Optique</router-link>
                              </li>
                              <li><i class="fab fa-instagram"></i>
                                   <router-link class="link" to="https://www.instagram.com/micalex_optique/" target="blank"> Micalex
                                        Optique</router-link>
                              </li>
                              <li><i class="fab fa-linkedin"></i>
                                   <router-link class="link" to="https://www.linkedin.com/company/micalex-optique/" target="blank">
                                        Micalex Optique</router-link>
                              </li>
                              <li><i class="fab fa-whatsapp"></i>
                                   <a class="link" href="https://wa.me/93658616" target="blank">
                                        Micalex Optique</a>
                                       +22893658616/
                                        /+228 93658894 -->
                    <!--         </li>
                         </ul>
                    </div> -->
               </div>
          </div>


          <div class="copyright">
               <div class="flex">
                    <img class="img-fluid" src="../assets/Arrow.svg" alt="">
                    <div class="text-center">

                         <a class="social-media" href="https://www.facebook.com/Micalexoptique" target="blank"><i
                                   class="fab fa-facebook"></i></a>
                         <a class="social-media" href="https://www.instagram.com/micalex_optique/" target="blank"><i
                                   class="fab fa-instagram"></i></a>
                         <a class="social-media" href="https://www.linkedin.com/company/micalex-optique/"
                              target="blank"><i class="fab fa-linkedin"></i></a>
                         <a class="social-media" href="https://wa.me/93658616" target="blank"> <i
                                   class="fab fa-whatsapp"></i></a>

                    </div>
               </div>

               <p>&copy; Copyright 2022 Micalex Optique. developé par <a href="http://www.mekengroup.com"
                         target="_blank" rel="noopener noreferrer">MEG</a></p>
          </div>

     </div>



</template>

<script>
     export default {

     }
</script>

<style lang="scss" scoped>
     .footer {
          padding: 25px;
          background-color: #001D6E;

          p,
          h1 {
               color: #fff;
               font-family: 'Jost', sans-serif;
               font-weight: 800;
               text-align: justify;

          }

          p {
               font-size: 15px;
               font-family: 'Jost', sans-serif;
          }

          .row {
               margin-left: 55px;
          }


          ul,
          li {
               font-size: 17px;
               font-family: 'Jost', sans-serif;
               font-weight: 500;
               padding: 2px;
               color: #fff;

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


          .copyright {
               padding: 5px;
               background-color: #001D6E;

               .flex {
                    display: flex;
                    text-align: center;
                    justify-content: center;


                    @media (max-width: 550px) {
                         flex-direction: column;
                         width: 100%
                    }
               }


               p {
                    font-family: 'Jost', sans-serif;
                    font-weight: 600;
                    text-align: center;
                    color: #fff;
               }

               a {
                    text-decoration: none;
                    font-family: 'Jost', sans-serif;
                    font-weight: 900;
                    padding: 2px;

               }

               .social-media {
                    color: #fff;
                    padding: 7px;
                    font-size: 15px
               }
          }

     }
</style>
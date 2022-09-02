<template>
  <div class="home">
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="../assets/Slide-1.png" class="d-block w-100 img-fluid" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>
              Confiez - Nous <br>
              Votre Regard

            </h5>
            <p>
              <router-link type="button" class="btn btn-light" to="/consult">Prenez Un rendez-vous chez Nous
              </router-link>
            </p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="../assets/Slide-2.png" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>
              Choisissez des <br>
              Lunettes Selon votre <br>
              Forme de Visage
            </h5>
            <p>
              <router-link type="button" class="btn btn-light" to="/consult">Prenez Un rendez-vous chez Nous
              </router-link>
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/Slide-3.png" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>
              Optimiser Votre Vision <br>
              en Vous Procurant <br>
              Les meilleurs Lunettes

            </h5>
            <p>
              <router-link type="button" class="btn btn-light" to="/consult">Prenez Un rendez-vous chez Nous
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>



    <section class="services">
      <div class="">
        <h1>Les Services de Micalex Optique</h1>

        <div class="row">
          <div class="col-lg-3">
            <img class="img-fluid" src="../assets/Group9.png" alt="">
            <router-link to="" class="link">
              <h2> Vente </h2>
            </router-link>
          </div>
          <div class="col-lg-3">
            <img class="img-fluid" src="../assets/Group8.png" alt="">
            <router-link to="" class="link">
              <h2> Conseils </h2>
            </router-link>
          </div>
          <div class="col-lg-3">
            <img class="img-fluid" src="../assets/Group7.png" alt="">
            <router-link to="" class="link">
              <h2> Entretient </h2>
            </router-link>
          </div>
          <div class="col-lg-3">
            <img class="img-fluid" src="../assets/Group15.png" alt="">
            <router-link to="" class="link">
              <h2> Controle de Vue </h2>
            </router-link>
          </div>
        </div>
      </div>

    </section>

    <section class="vision">
      <div class="container">
        <div class="aside">
          <div class="heading" style="text-align: center;">
            <h1>Notre Vision</h1>
          </div>
          <p>
            La vision de Micalex Optique est simple et unique. Nous comptons devenir la solution incontournable de la
            vue au Togo et dans la sous-région ouest africaine et même à l’international. C’est un réel défi auquel nous
            nous attachons au quotidien afin de le relever.

          </p>
        </div>
      </div>

    </section>

    <section class="work-hours">
      <div>
        <div class="row">
          <div class="col-lg-6">
            <div class="flex">
              <div>
                <img src="../assets/1.svg" alt="">
              </div>

              <div>
                <h1>Heures D'ouverture</h1>
                <p class="hours">
                  <span>Lundi - Vendredi: 08h à 20h</span> <br>
                  <span>Samedi: 10h à 16h</span>
                </p>
              </div>


            </div>

          </div>
          <div class="col-lg-6">
            <div class="flex">
              <img src="../assets/2.svg" alt="">
              <h1>Service Immediat</h1>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <div class="flex">
              <img src="../assets/4.svg" alt="">
              <h1>Cas de Reparations <br>
              </h1>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="flex">
              <img src="../assets/3.svg" alt="">
              <h1>Cas d'Assurance</h1>
            </div>
          </div>


        </div>

      </div>

    </section>

    <section class="contact">
      <div class="box" style="padding: 15px">
        <h1 style="text-align: center">Prendre un rendez-vous <br>
          chez nos Experts</h1>
        <div class="container">
          <div class="form-signin">


            <div class="row">
              <div class="col-lg-6">
                <form @submit.prevent="getAppointment" method="post">
                  <div class="mb-3">
                    <label for="name" class="form-label">Nom*</label>
                    <input type="text" class="form-control" id="name" v-model="form.nom" required>
                  </div>
                  <div class="mb-3">
                    <label for="name" class="form-label">Prenom*</label>
                    <input type="text" class="form-control" id="name" v-model="form.prenom" required>
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Email*</label>
                    <input type="email" class="form-control" id="email" v-model="form.email" required>
                  </div>
                  <div class="mb-3">
                    <label for="number" class="form-label">Telephone*</label>
                    <input type="text" class="form-control" id="number" v-model="form.telephone" required>
                  </div>
                  <div class="mb-3">
                    <label for="number" class="form-label">Les Ordonnances</label>
                    <input type="file" class="form-control" id="number" accept="image/*" multiple>
                  </div>
                  <div class="mb-3">
                    <label for="number" class="form-label">Les Agences*</label>
                    <select name="select" class="form-control" id="" v-model="form.agence">
                      <option value="1" disabled>Choisissez l'agence</option>
                      <option value="Agence de Dekon">Agence de Dekon</option>
                      <option value="Agence de la Plage">Agence de la Plage</option>
                    </select>

                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label">Message</label>
                    <textarea name="message" id="message" class="form-control" placeholder="Le message" rows="5"
                      required="" v-model="form.message"></textarea>
                  </div>


                  <button type="submit" :disabled="loading" class="btn btn-warnings w-100">
                    Envoyer
                  </button>
                </form>
              </div>

              <div class="col-lg-6">
                <img class="img-fluid" src="../assets/Images/21Micalex.jpg" alt="">
              </div>
            </div>
          </div>
          <!-- <h1>Prendre un rendez-vous <br>
              chez nos Experts</h1>
            <div>
              <h6>

                Rencontrer nos opticiens spécialistes
                dans l'adaptation et la fabrication de
                lentilles optiques, de lunettes, de lentilles
                de contact et de visages.

                <br>
                <router-link to="/consult" id="button" class="btn btn-outline-primary btn-aminated">Cliquez Ici
                </router-link>
              </h6>

            </div>

          </div>

          <div class="photo">
            <img class="img-fluid" src="../assets/vision.jpg" alt="">
          </div>
 -->
        </div>
      </div>

    </section>

    <section class="products">
      <div>
        <h1>Nos Produits</h1>
        <div class="row" v-if="produits && produits.length">
          <div class="col-lg-3" v-for="produit of produits" :key="produit.id">
            <img class="img-fluid" :src=" `${config.backend_url}${produit.attributes.image.data.attributes.url}` "
              alt="">

            <h3>{{ produit.attributes.nom }}</h3>
          </div>
          <!--   <div class="col-lg-3">
            <img class="img-fluid" src="../assets/Lunettes/AL68265103.jpg" alt="">

            <h3>Marc Jacob</h3>
          </div>
          <div class="col-lg-3">
            <img class="img-fluid" src="../assets/Lunettes/AL68272524.jpg" alt="">
            <h3>Tommy Hilfiger</h3>
          </div>
          <div class="col-lg-3">
            <img class="img-fluid" src="../assets/Lunettes/AL68308570.jpg" alt="">

            <h3>Bvlgari</h3> -->
        </div>
      </div>
      <!-- <div class="row">
          <div class="col-lg-3">
            <img class="img-fluid" src="../assets/Lunettes/AL68296593.jpg" alt="">

            <h3>Versace</h3>
          </div>
          <div class="col-lg-3">
            <img class="img-fluid" src="../assets/Lunettes/AL68392545.jpg" alt="">

            <h3>Quartier</h3>
          </div>
          <div class="col-lg-3">
            <img class="img-fluid" src="../assets/Lunettes/AL68395545.jpg" alt="">
            <h3>Fendi</h3>
          </div>
          <div class="col-lg-3">
            <img class="img-fluid" src="../assets/Lunettes/AL68396101.jpg" alt="">

            <h3>Outika</h3>
          </div>
        </div> -->
      <!-- </div> -->
    </section>

    <section class="marques">
      <h1>Nos Marques</h1>
      <div>
          <vue3-marquee :clone="true">

            <!--    <img v-for="marque of marques" :key="marque.id" class="images img-fluid"
              :src=" `${config.backend_url}${marque.attributes.image.data.attributes.url}`" /> -->

            <img class="images" height="100" src="../assets/Fendi.png" />
            <img class="images" height="100" src="../assets/Versace.png" />
            <img class="images" height="100" src="../assets/Outika.png" />
            <img class="images" height="100" src="../assets/Bvlgari.png" />
            <img class="images" height="100" src="../assets/Outika.png" />

          </vue3-marquee>
      </div>
    </section>

    <section class="testimony">
      <h1>Ils nous font confiance</h1>

      <br>
      <div class="row" style="padding: 10px" v-if="testimoniales && testimoniales.length">
        <div class="col-lg-3" v-for="testimoniale of testimoniales" :key="testimoniale.id">
          <div class="testy">
            <img class="images img-fluid"
              :src=" `${config.backend_url}${testimoniale.attributes.avatar.data.attributes.url}` " alt="">
            <p>
              <span>{{ testimoniale.attributes.nom }}</span> <br>
              <em>
                {{ testimoniale.attributes.commentaire }}
              </em>
            </p>

          </div>
        </div>
        <!--  <div class="col-lg-3">
          <div class="testy">
            <img class="images img-fluid" src="../assets/Images/17Micalex.jpg" alt="">
            <p>
              <span>Thierry Konan</span> <br>
              <em>
                Lorem ipsum dolor sit amet consectetur,
                praesentium assumenda laboriosam nulla
                exercitationem ab
              </em>
            </p>

          </div>
        </div>
        <div class="col-lg-3">
          <div class="testy">
            <img class="images img-fluid" src="../assets/Images/17Micalex.jpg" alt="">
            <p>
              <span>Thierry Konan</span> <br>
              <em>
                Lorem ipsum dolor sit amet consectetur,
                praesentium assumenda laboriosam nulla
                exercitationem ab
              </em>
            </p>

          </div>
        </div>
        <div class="col-lg-3">
          <div class="testy">
            <img class="images img-fluid" src="../assets/Images/17Micalex.jpg" alt="">
            <p>
              <span>Thierry Konan</span> <br>
              <em>
                Lorem ipsum dolor sit amet consectetur,
                praesentium assumenda laboriosam nulla
                exercitationem ab
              </em>
            </p>

          </div>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
  // @ is an alias to /src
  import {
    Vue3Marquee
  } from 'vue3-marquee'
  import 'vue3-marquee/dist/style.css'
  import axios from 'axios'
  import config from '../../config.js'

  export default {
    name: "HomeView",
    components: {
      Vue3Marquee,
    },
    data() {
      return {
        loading: false,
        config,
        form: {
          nom: '',
          prenoms: '',
          email: '',
          telephone: '',
          agence: '',
          message: ''
        },
        produits: [],
        testimoniales: [],
        marques: [],
        errors: [],

      }
    },

    created() {
      axios.get(`/all-produits?populate=*`)
        .then(response => {
          this.produits = response.data.data
          console.log()

        })
        .catch(e => {
          this.errors.push(e)
        })

      axios.get(`/testimonials?populate=*`)
        .then(response => {
          this.testimoniales = response.data.data
          console.log()

        })
        .catch(e => {
          this.errors.push(e)
        })

      axios.get(`/nos-marques?populate=*`)
        .then(response => {
          this.marques = response.data.data
          console.log()

        })
        .catch(e => {
          this.errors.push(e)
        })
    },

    methods: {

      async getAppointment() {
        this.loading = true;
        let formdata = new FormData();
        formdata.append("nom", this.form.nom)
        formdata.append("prenoms", this.form.prenoms)
        formdata.append("email", this.form.email)
        //formdata.append("ordonnances", this.form.ordonnances)
        formdata.append("telephone", this.form.telephone)
        formdata.append("agence", this.form.agence)
        formdata.append("message", this.form.message)
        //bodyFormData.append('fileInfo', '{"caption":"caption text","alternativeText":"alternative text"}')
        await axios.post(`/appointments`, {
              data: this.form
            }
            /* , {
                                          headers: {
                                               "Content-Type": "multipart/form-data",
                                          }
                                } */
          )
          .then(response => {
            this.loading = false
            console.log(response);
            this.$swal.fire({
              text: 'Votre demande a étè prise en compte, Nous vous contacterons sous peu',
              toast: true,
              showConfirmButton: false,
              icon: 'success',
              position: 'top-right',
              timer: 4000

            })

            this.form = {
              nom: '',
              prenoms: '',
              email: '',
              //ordonnances: '',
              telephone: '',
              agence: '',
              message: ''
            };




          }).catch(error => {
            console.log(error)
          })
      },


      async fileAdded(event) {
        this.form.ordonnances = event.target.files
      }

    },

  };
</script>

<style lang="scss" scoped>
  .images {
    margin: 2px;
  }

  .login {
    padding: 15px;
  }

  .form-signin {
    width: 100%;
    height: 100%;
    padding: 15px;
    font-family: 'Jost', sans-serif;
    border-radius: 5px;
    box-shadow: 0 5px 10px #0005;
    background-color: #fff;

    img {
      width: 100%;
      height: 100%;
    }

    form {
      max-width: 100%;
      padding: 10px;
      background-color: #fff;
      font-family: 'Jost', sans-serif;

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

    .flex {
      display: flex;
      justify-content: space-between;
    }
  }



  h5 {
    font-size: 30px;
    animation-name: moveInLeft;
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
    color: #ffff;
    font-weight: 600;
    font-family: 'Jost', sans-serif;
    text-transform: uppercase;
    text-align: left;

  }





  p {
    font-size: 15px;
    animation: moveInRight 3s ease-out;
    font-weight: 400;
    margin-bottom: 100px;
    text-align: left;
    font-family: 'Jost', sans-serif;
    line-height: 25px;


  }

  .services {
    padding: 10px;
    text-align: center;

    @media (min-width: 550px) {
      margin-top: 75px;
      padding: 20px;
    }

    h1 {
      text-align: center;
      text-transform: uppercase;
      font-size: 30px;
      padding: 5px;
      font-family: 'Jost', sans-serif;
      color: #001D6E;
      font-weight: bold;
    }

    img {
      align-items: center;
      padding: 15px;


    }

    .row {
      text-align: center;
      padding: 10px;
    }

    .col-lg-3 {
      padding: 15px;
    }

    .link {
      text-decoration: none;
      font-family: 'Jost', sans-serif;
      color: #001D6E;
      font-weight: bold;


    }



    h2 {
      font-family: 'Jost', sans-serif;
      color: #001D6E;
      font-weight: bold;
      box-shadow: 0 10px 10px #0005;
      border: 1px solid #fff;
      text-align: center;
      padding: 5px;
      text-transform: uppercase;
      font-size: 20px;
    }
  }

  .vision {
    padding: 10px;
    background-image: url("../assets/Images/2Micalex.jpg");
    background-size: cover;
    width: 100%;


    img {
      object-fit: cover;

      @media (min-width: 550px) {
        height: 50%;
        width: 100%;
      }


    }

    h1 {
      text-align: center;
      text-transform: uppercase;
      font-size: 20px;
      padding: 5px;
      font-family: 'Jost', sans-serif;
      color: #001D6E;
      font-weight: bold;
    }

    .aside {
      padding: 10px;

      @media (min-width: 550px) {
        width: 50%;
        height: 50%;
      }


      h1 {
        text-align: center;
        background-color: #fff;
        border: 2px solid#001D6E;
        border-radius: 5px;
        width: 50%;
        align-items: center;
        margin-right: 50px;

      }


      p {
        padding: 18px;
        background-color: #fff;
        border: 2px solid#001D6E;
        font-family: 'Jost', sans-serif;
        font-size: 17px;
        border-radius: 5px;

        @media (min-width: 550px) {
          padding: 50px;
        }

      }
    }
  }



  .work-hours {
    padding: 20px;
    text-align: center;
    background-color: #CFD2CF;

    h1 {
      text-transform: uppercase;
      font-size: 16px;
      font-family: 'Jost', sans-serif;
      color: #001D6E;
      font-weight: bold;
      margin: 10px;


    }

    span {
      color: #001D6E;

    }


    .hours {
      margin-left: 15px;
      font-family: 'Jost', sans-serif;
    }

    .flex {
      display: flex;
      justify-content: center;
    }

    .row {
      padding: 5px;
    }

    .col-lg-6 {
      padding: 10px;
    }
  }

  .contact {
    margin-top: 40px;


    h1 {
      text-transform: uppercase;
      font-size: 25px;
      font-family: 'Jost', sans-serif;
      color: #001D6E;
      font-weight: bold;

    }




    .content {
      text-align: center;
      padding: 30px;
      align-content: center;
      top: 30vmin;


      h6 {
        text-align: center;
        padding: 10px;
        font-size: 17px;
        font-family: 'Jost', sans-serif;

      }

      @media (min-width: 550px) {
        width: 50%;
      }

      #button {
        margin: 10px;
        border: 2px solid #001D6E;
        color: #000;
      }


      #button:hover {
        background-color: #001D6E;
        border: 2px solid #001D6E;
        color: #fff;
      }


    }

    .photo {
      width: 100%;
      height: 100%;

      @media (max-width: 550px) {
        max-width: fit-content;
      }
    }
  }

  .products {
    padding: 20px;
    background-color: #CFD2CF;
    text-align: center;



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
      text-transform: uppercase;


    }

    .row {
      padding: 10px;

      .col-lg-3 {
        padding: 15px;
      }
    }


  }

  .marques {
    padding: 25px;
    background-color: #fff;
    text-align: center;

    h1 {
      text-align: center;
      text-transform: uppercase;
      font-size: 25px;
      padding: 5px;
      font-family: 'Jost', sans-serif;
      color: #001D6E;
      font-weight: bold;
    }

  }

  .testimony {
    padding: 15px;
    background-color: #CFD2CF;
    text-align: center;


    h1 {
      text-align: center;
      text-transform: uppercase;
      font-size: 25px;
      padding: 5px;
      font-family: 'Jost', sans-serif;
      color: #001D6E;
      font-weight: bold;
    }

    span {
      padding: 5px;
      font-family: 'Jost', sans-serif;
      color: #001D6E;
      font-weight: bold;
    }

    em {
      padding: 5px;
      font-family: 'Jost', sans-serif;
      font-size: 14px;
      font-weight: 400;
    }

    .testy {
      display: flex;
      justify-content: space-evenly;
    }

    .images {
      border-radius: 75%;
      width: 100px;
      height: 100px;
    }


  }

  .hero {
    //background-image: url("../assets/hero-bg.png");
    background-attachment: fixed;
    position: relative;
    height: 100vh;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }

    .hero-text {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #fff;

      h4 {
        text-transform: uppercase;
        font-size: 22px;
        padding-bottom: 4px;
      }

      h2 {
        font-size: 50px;

        @media (min-width: 550px) {
          font-size: 80px;
        }
      }

      hr:nth-child(2) {
        max-width: 365px;
        margin-bottom: 16px;
      }

      hr:nth-child(4) {
        height: 6px;
        background-color: #fff;
        border: none;
        max-width: 85px;
        margin-top: 16px;
      }
    }
  }
</style>
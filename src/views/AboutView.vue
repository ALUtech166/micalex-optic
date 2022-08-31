<template>
  <div class="header">
    <h1 class="titre">A propos de Nous</h1>
  </div>

  <div class="about">

    <section class="a-propos section-1">

      <div class="text-center">
        <div class="row">
          <div class="col-md-6 col-12">
            <div class="pray">
              <img class="img-fluid" src="../assets/Images/16Micalex.jpg" alt="Pray" />
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div class="panel text-left">
              <div class="description">
                <h1>Micalex Optique </h1>
                <p class="">
                  Micalex Optique est la lunetterie par excellence de la capitale. Elle est une entreprise
                  spécialisée dans la
                  fourniture de services optiques en général. Particulièrement, elle s’est imposée et fait parler
                  d’elle dans
                  le secteur de la lunetterie.
                  Ceci dit, Micalex Optique propose une large gamme de produits tels que les verres correcteurs ,
                  les
                  lentilles de contacts , les montures de toutes gamme et toutes qualités ainsi que tout les
                  accessoires de
                  l’optique etc…
                  Nous nous démarquons particulièrement à travers nos nombreux services pour le bien-être de la
                  santé visuelle
                  de tous. La qualité et l’efficacité sont notre leitmotiv. C’est pourquoi Micalex Optique œuvre
                  et collabore
                  avec des ingénieurs compétents et férus qui s’y connaissent en la matière.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="objectif">
      <div class="container">
        <div class="banner">
          <h1>Notre Vision et Objectif</h1>
        </div>

        <p>
          La vision de Micalex Optique est simple et unique. Nous comptons devenir la solution incontournable de la vue
          au Togo et dans la sous-région ouest africaine et même à l’international. C’est un réel défi auquel nous nous
          attachons au quotidien afin de le relever.
          En ce qui concerne nos objectifs, nous comptons à court, moyen et long terme, résoudre selon nos capacités et
          potentialités, les problèmes de vue au Togo et dans la sous-région.
        </p>
      </div>

    </section>

    <section class="space">
      <div class="description">
        <p>

          Au rang de nos produits, nous proposons à notre clientèle des montures de toutes marques très résistant
          « Dior, Marc Jacob, Fendi, Rico Mirado, Tommy Hilfiger, BVLGARI, Versace, Outika, Quartier, Mont Blanc,
          Silouette, Carrella, Chanel, Swarovski, Chopard, Hugo Boss, Fred, Celine, Louis Vuitton, Roberto Cavanni,
          Codak, Yves Saint Laurent, etc. »

        </p>
      </div>

    </section>

  </div>



</template>

<script>
  import axios from 'axios'
  import config from '../../config.js'

  export default {
    data() {
      return {
        config,
        abouts: [],
        errors: []
        
      }
    },

   created() {
      axios.get(`/about`)
        .then(response => {
          this.abouts = response.data.data
          console.log()

        })
        .catch(e => {
          this.errors.push(e)
        })
    
  }

 }
</script>



<style lang="scss" scoped>
  .section-1 .row .col-md-6 .pray img {
    opacity: 0.8;
    width: 80%;
    border-radius: 10px;
  }

  .section-1 .row .col-md-6:last-child {
    position: relative;
  }

  .section-1 .row .col-md-6 .panel {
    position: absolute;
    top: 20vmin;
    left: -25vmin;
    background: white;
    border-radius: 3px;
    text-align: center;
    padding: 30px 25px 75px 50px;
    box-shadow: 0px 25px 42px rgba(0, 0, 0, 0.2);
    font-family: var(--Rubik);
    z-index: 1;
  }

  .section-1 .row .col-md-6 .panel {
    padding: 10px;
    font-size: 20px;
  }

  .section-1 .row .col-md-6 .panel p {
    color: rgba(0, 0, 0, 0.5);
    font-family: 'Jost', sans-serif;
  }

  h1 {
    font-size: 25px;
    font-weight: 900;
    font-family: 'Jost', sans-serif;
    color: #006A4A;
    text-align: center;
    padding: 10px;
  }



  .a-propos {
    padding: 35px;
    margin: 20px;


  }

  .description {
    padding: 25px;
    border: 1px solid #001D6E;
    border-radius: 5px;

    h1 {
      color: #001D6E;
      font-weight: bold;
      font-size: 45px;
      text-transform: uppercase;
    }
  }


  .space {
    padding: 35px;
    margin: 20px;



    .description {
      padding: 25px;
      border: 1px solid #001D6E;
      border-radius: 5px;
      background-color: #001D6E;
      color: #fff;

      p {
        padding: 15px;
      }

      h1 {
        color: #001D6E;
        font-weight: bold;
        font-size: 45px;
        text-transform: uppercase;
      }
    }
  }

  .objectif {
    background-image: url("../assets/Ok-3.png");
    background-size: cover;
    padding: 5px;



    h1 {
      background-color: #fff;
      border: 1px solid#001D6E;
      text-transform: uppercase;
      border-radius: 5px;
      width: 35%;
      font-size: 25px;
      color: #001D6E;
      font-weight: bold;
      padding: 10px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    }

    p {
      padding: 5px;
      color: #fff;
      font-size: 17px;
      font-family: 'Jost'sans-serif;

      @media (min-width: 550px) {
        padding: 5px;
        width: 50%;
        color: #fff;
        font-size: 17px;
      }

    }
  }

  .space {
    padding: 25px;
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

  @media (max-width: 1199.98px) {
    .section-1 {
      padding: 10px 0px;

    }
  }

  @media (max-width: 1264px) {
    .section-1 {
      height: 100%;
      padding: 50px;
    }

    .section-1 .row .col-md-6 .panel {
      position: absolute;
      top: 2vmin;
      left: -15vmin;


    }

    .section-1 .row .col-md-6 .panel {
      padding: 5px;
      font-size: 15px;
    }
  }


  @media only screen and (max-width: 768px) {

    .section-1 .row .col-md-6 .panel {
      position: initial;
      width: initial;
      height: initial;
    }




  }


  @media (max-width: 550px) {
    .section-1 {
      width: 100%
    }

    .description {
      padding: 5px;
    }

    .section-1 .row .col-md-6 .panel {
      padding: 0px;
      font-size: 15px;
      width: 100%
    }
  }
</style>
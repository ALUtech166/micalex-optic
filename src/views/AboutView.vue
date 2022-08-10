<template>
  <div class="header">
    <h1 class="titre">A propos de Nous</h1>
  </div>

  <div class="about">

    <div class="">
      <section class="a-propos">
        <div class="square"></div>
        <div class="description">
          <h1>Micalex Optique</h1>
          <p>
            Micalex Optique est la lunetterie par excellence de la capitale. Elle est une entreprise spécialisée dans la
            fourniture de services optiques en général. Particulièrement, elle s’est imposée et fait parler d’elle dans
            le secteur de la lunetterie.
            Ceci dit, Micalex Optique propose une large gamme de produits tels que les verres correcteurs , les
            lentilles de contacts , les montures de toutes gamme et toutes qualités ainsi que tout les accessoires de
            l’optique etc…
            Nous nous démarquons particulièrement à travers nos nombreux services pour le bien-être de la santé visuelle
            de tous. La qualité et l’efficacité sont notre leitmotiv. C’est pourquoi Micalex Optique œuvre et collabore
            avec des ingénieurs compétents et férus qui s’y connaissent en la matière.

          </p>
        </div>
        <div class="square-root"></div>
      </section>


    </div>

    <section class="objectif">
      <div class="">
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

    </section>

  </div>



</template>

<script>


</script>



<style lang="scss" scoped>
  .a-propos {
    padding: 35px;
    margin: 20px;



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
  }

  .objectif {
    background-image: url("../assets/Ok-3.png");
    background-size: cover;
    padding: 10px;
    


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
      padding: 10px;
      color: #fff;
      font-size: 17px;
      font-family: 'Jost' sans-serif;

      @media (min-width: 550px) {
        padding: 10px;
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




  .image {
    border-radius: 10px;

  }
</style>
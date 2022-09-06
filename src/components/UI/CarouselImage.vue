<template>
     <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true" ata-aos="zoom-in"
          data-aos-easing="linear" data-aos-duration="3000">
          <!-- <div class="carousel-indicators">
               <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
               <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
               <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
          </div> -->
          <div class="carousel-inner">
               <div class="carousel-item active">
                    <div class="banner-container">

                         <div class="banner">
                              <img class="d-block w-100 img-fluid" src="../../assets/Images/2Micalex.jpg" alt="">

                         </div>

                         <div class="banner">
                              <img src="../../assets/Images/1.jpg" class="d-block w-100 img-fluid" alt="...">
                         </div>

                         <div class="banner">
                              <img src="../../assets/Images/23Micalex.jpg" class="d-block w-100 img-fluid" alt="...">
                         </div>


                    </div>

               </div>

               <div class="carousel-item">
                    <div class="banner-container">

                         <div class="banner">
                              <img src="../../assets/Images/1.jpg" class="d-block w-100 img-fluid" alt="...">
                         </div>


                         <div class="banner">
                              <img class="d-block w-100 img-fluid" src="../../assets/Images/2.jpg" alt="">

                         </div>

                         <div class="banner">
                              <img src="../../assets/Images/3.jpg" class="d-block w-100 img-fluid" alt="...">
                         </div>


                    </div>

               </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
               data-bs-slide="prev">
               <span class="carousel-control-prev-icon" aria-hidden="true"></span>
               <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
               data-bs-slide="next">
               <span class="carousel-control-next-icon" aria-hidden="true"></span>
               <span class="visually-hidden">Next</span>
          </button>
     </div>

</template>

<script>
export default {
    
}
</script>

<style scoped>

.banner-container {
     display: flex;
     align-items: center;
     justify-content: center;
}

.banner-container .banner {
     border-radius: 5px;
     margin: 10px;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-wrap: wrap;
     box-shadow: 0 5px 10px #0005;
     overflow: hidden;
}

.banner-container .banner .shoe {
     flex: 1 1 250px;
     padding: 15px;
     text-align: center;
}

.banner-container .banner .shoe img {
     width: 40%;
     border-radius: 10px;
}

.banner-container .banner .content {
     flex: 1 1 250px;
     text-align: center;
     padding: 10px;
     text-transform: uppercase;
}

.banner-container .banner .content span {
     color: #eee;
     font-size: 25px;
}

.banner-container .banner .content h3 {
     color: #fff;
     font-size: 40px;
}

.banner-container .banner .content p {
     color: #eee;
     font-size: 20px;
     padding: 10px 0;
}

.banner-container .banner .content .btn {
     display: block;
     height: 40px;
     width: 150px;
     line-height: 40px;
     background: #fff;
     color: #d63031;
     margin: 5px auto;
     text-decoration: none;
}

.banner-container .banner .women {
     position: relative;
     bottom: -33px;
     padding: 10px;
     flex: 1 1 250px;
}

@media (min-width: 550px) {
     img {
          width: 75%;
          height: 300px;
     }
}

@media (max-width:768px) {
     .banner-container .banner .women {
          display: none;
     }
}
</style>
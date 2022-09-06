<template>

     <div class="divider">
          <div class="form">

               <form class="mb-5" @submit.prevent="sendMessage">
                    <div class="mb-3">
                         <label for="name" class="form-label">Nom*</label>
                         <input type="text" class="form-control" id="name" v-model="form.nom" required>
                    </div>
                    <div class="mb-3">
                         <label for="name" class="form-label">Prenom*</label>
                         <input type="text" class="form-control" id="name" v-model="form.prenoms" required>
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
                         <label for="objet" class="form-label">Objet</label>
                         <input type="text" class="form-control" name="remember_token" placeholder="Objet" required
                              v-model="form.objet">
                    </div>
                
                    <div class="mb-3">
                         <label for="" class="form-label">Message</label>
                         <textarea name="message" id="message" class="form-control" placeholder="Le message" rows="5"
                              required="" v-model="form.message"></textarea>
                    </div>
                 
                    <div class="row">
                         <div class="col-md-12 form-group">
                              <input type="submit" value="Envoyer Message" class="btn btn-success btn-animated">
                              <span class="submitting"></span>
                         </div>
                    </div>
               </form>



          </div>

     </div>
</template>

<script>
     import axios from 'axios'
     export default {

          data() {
               return {
                    loading: false,
                    form: {
                         nom: '',
                         prenoms: '',
                         email: '',
                         objet: '',
                         telephone: '',
                         message: ''
                    },

               }
          },

          methods: {

               async sendMessage() {
                    this.loading = true
                    let formdata = new FormData();
                    formdata.append("nom", this.form.nom)
                    formdata.append("prenoms", this.form.prenoms)
                    formdata.append("email", this.form.email)
                    formdata.append("objet", this.form.objet)
                    formdata.append("telephone", this.form.telephone)
                    formdata.append("message", this.form.message)
                    await axios.post(`/contacts`, {
                              data: {
                                   ...this.form
                              }
                         })
                         .then(response => {
                              console.log(response);
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
                                   objet: '',
                                   telephone: '',
                                   message: ''
                              };

                         }).catch(error => {
                              console.log(error)
                         })
               }

          },


     }
</script>
<style scoped>
     form {
          max-width: 100%;
          border-radius: 10px;
          padding: 2px;
          background-color: #fff;
          font-family: 'Jost', sans-serif;
     }

     label {
          font-weight: bold;
          font-family: 'Jost', sans-serif;
          font-size: 17px;
     }


     .btn:link,
     .btn:visited {
          text-transform: uppercase;
          text-decoration: none;
          padding: 15px 40px;
          display: inline-block;
          border-radius: 100px;
          transition: all .2s;
          position: relative;

     }



     .btn-success {
          background-color: #001D6E;
          color: #fff;
     }

     .btn-success:hover {
          background-color: #001D6E;
          color: #fff;
     }

     .btn::after {
          display: inline-block;
          height: 100%;
          width: 100%;
          border-radius: 100px;
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          transition: all .4s;
     }





     .btn-animated {
          animation: moveInBottom .5ss ease-out .75s;
          animation-fill-mode: backwards;
     }
</style>
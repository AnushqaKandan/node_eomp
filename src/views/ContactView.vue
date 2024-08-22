<template>
    <div id="contact">
        <div class="mx-auto" id="form">
            <form action="https://formspree.io/f/mwperylp" method="POST" role="form" class="mx-auto my-auto">
                      <div class="row text">
                        <div class="col-md-6 form-group">
                          <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" v-model="name">
                        </div>
                        <div class="col-md-6 form-group mt-3 mt-md-0">
                          <input type="text" name="surname" class="form-control" id="surname" placeholder="Your Surname" v-model="surname">
                        </div>
                      </div>
                      <div class="form-group mt-3">
                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" v-model="email">
                      </div>
                      <div class="form-group mt-3">
                        <textarea class="form-control" name="message" rows="5" placeholder="Message" v-model="message"></textarea>
                      </div>
                      <div class="text-center mt-4 send">
                        <button type="submit" @click="check()">Send Message</button> <br>
                      </div>
            </form>
        </div>
        
    </div>
</template>
<script>
import {toast} from 'vue3-toastify';
import "vue3-toastify/dist/index.css";
export default {
    data() {
        return {
            name: '',
            surname: '',
            email: '',
            message: '',
        }
    },
    methods:{
        check(){
            if((this.name == '') && (this.surname == '') && (this.email == '') && (this.message == '')){
                toast("Please fill in all the fields", {
                    "theme": "dark",
                    "type": "error",
                    "position": "top-center",
                    "dangerouslyHTMLString": true
                })
            }
            else{
                toast("Message sent successfully!", {
                    "theme": "dark",
                    "type": "success",
                    "position": "top-center",
                    "dangerouslyHTMLString": true
                })
            }
        }
    }
}
</script>
<style scoped>
    #contact{
        background-image: url('https://c0dingforfun.github.io/node-images/Images/Contact/laptop.jpg');
        background-position: center;
        background-size: cover;
        height:90vh;
    }
    #form{
        display:flex;
        align-items:center ;
        width:50vw;
        height:50vh;
        border: double 2px black;
        backdrop-filter: blur(2px);
        background: transparent;
    }

</style>
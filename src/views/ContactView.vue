<template>
    <div id="contact">
        <div class="d-flex justify-content-center" id="form">
            <form action="https://formspree.io/f/xjvnzvav" method="POST" role="form">
                      <div class="row">
                        <div class="col-md-6 form-group">
                          <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" v-model="name">
                        </div>
                        <div class="col-md-6 form-group mt-3 mt-md-0">
                          <input type="text" name="surname" class="form-control" id="surname" placeholder="Your Surname" >
                        </div>
                      </div>
                      <div class="form-group mt-3">
                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" >
                      </div>
                      <div class="form-group mt-3">
                        <textarea class="form-control" name="message" rows="5" placeholder="Message" ></textarea>
                      </div>
                      <div class="text-center mt-4 send">
                        <button type="submit" @click="check()">Send Message</button> <br>
                      </div>
            </form>
        </div>
        
    </div>
    <!-- <div class="row"> -->
        <!-- <div class="col-lg-6 col-md-6 col-sm-12" id="contact">
            <img src="https://c0dingforfun.github.io/node-images/Images/Contact/laptop.jpg" alt="">
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">

        </div> -->
    <!-- </div> -->
</template>
<script>
export default {
    data() {
        return {
            name: '',
            surname: '',
            email: '',
            message: '',
        }
    },
    
}
</script>
<style scoped>
    #contact{
        background-image: url('https://c0dingforfun.github.io/node-images/Images/Contact/laptop.jpg');
        /* filter: blur(3px); */
        /* position:absolute; */
        /* background-attachment: fixed; */
        background-position: center;
        background-size: cover;
        /* object-fit: contain; */
        height:90vh;
    }
    #form{
        width:50vw;
        height:50vh;
        filter: blur(2px);
    }
</style>
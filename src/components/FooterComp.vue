<template>
    <div class="footer">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 py-2">
                <div>
                    <img src="https://c0dingforfun.github.io/node-images/Images/Logo/Logo.png" alt="">
                </div>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-12 py-2">
                <h3>Contact</h3>
                <div><router-link to="/contact"><i class="las la-phone-square"></i>Call Us: 021 907 2378</router-link></div>
                <div><router-link to="/contact"><i class="las la-map-marker-alt"></i>Location:Industrial Area - Athlone Industrial</router-link></div>
            </div>
            <div class="col-lg-3 col-md-2 col-sm-12 py-2 social">
                <h3>Follow Us On:</h3>
                    <a href=""><i class="lab la-facebook"></i></a>
                    <a href=""><i class="lab la-instagram"></i></a>
                    <a href="node-eomp-4d23a.firebaseapp.com"><i class="las la-globe"></i></a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .footer{
        background-image: url('https://c0dingforfun.github.io/node-images/Images/Footer/background.jpg');
        background-size: cover;
        width:100vw;
        height:25vh;
        
    }
    .row{
        padding-top:10px;
    }
    .footer img{
        width:170px;
        height:150px;
        background:white;
        border-radius:50%;
    }
    a{
        color:white;
        transition:1s;
    }
    a:hover{
        color:black;
    }
    .footer i{
        font-size:20px;
    }
    .social i{
        font-size:30px;
        padding:0.3em;
    }
</style>
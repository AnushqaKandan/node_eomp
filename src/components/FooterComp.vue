<template>
    <div class="footer">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 py-2">
                <div>
                    <img src="https://c0dingforfun.github.io/node-images/Images/Logo/Logo.png" alt="">
                </div>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-12">
                <h3>Contact</h3>
                <div>hi</div>
                <div>hi</div>
                <div>hi</div>
            </div>
            <div class="col-lg-3 col-md-2 col-sm-12">
                <h5>Hello World</h5>
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
    #footer{
        display:flex;
        justify-content:center;
        align-content:center;
    }
    .row{
        padding-top:3vh;
    }
    .footer img{
        width:170px;
        height:10vh;
        background:white;
        border-radius:50%;
    }
</style>
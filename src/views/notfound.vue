<template>
    <div class="container">
        <img src="src/assets/img/404.png" class="pull-left">
        <div class="jumbotron pull-left">
            <h1>404</h1>
            <h2>抱歉,找不到了!</h2>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;smoke weed everyday!!!smoke weed everyday!!!smoke weed everyday!!!smoke weed everyday!!!smoke weed everyday!!!smoke weed everyday!!!smoke weed everyday!!!smoke weed everyday!!!</p>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
    }
</script>
<style scoped>
    img{
    }

    h1{
        font-size: 180px;
        text-indent: 120px;
        font-weight: bold;
        background-image: #085078; /* fallback for old browsers */
        background-image: -webkit-linear-gradient(to top, #4f8fff, #000); /* Chrome 10-25, Safari 5.1-6 */
        background-image: linear-gradient(to top, #4f8fff, #000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

    }

    .container{
        font-family:"Futura";
        padding-top: 10px;

    }

    .jumbotron{
        padding-top: 40px;
        background-color: #fff;
        max-width: 709px;
    }

    .jumbotron h2{
        font-size: 60px;
        letter-spacing:5px;
        padding-bottom: 30px;
        text-indent: 70px;
    }
</style>

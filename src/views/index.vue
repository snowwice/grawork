<template>
    <div class="container">
        <div class="row">
            <div class="box-title"><i></i><h3>试题模拟&nbsp;</h3></div>
            <div class="box-content">
                <ul class="cir">
                    <li><router-link to="/English/mock" class="en"><h4>大学英语</h4></router-link></li>
                    <li><router-link to="/Computer/mock" class="ck"><h4>计算机文化基础</h4></router-link></li>
                    <li><router-link to="/Math/mock" class="ma"><h4>高等数学</h4></router-link></li>
                    <li><router-link to="/Software/mock" class="sw"><h4>软件工程导论</h4></router-link></li>
                    <li><router-link to="/C/mock" class="cl"><h4>C语言</h4></router-link></li>
                </ul>
            </div>
        </div>
        <div class="row" v-for="item in info">
            <div class="box-head">
                <div class="box-title"><i></i><h3>{{item.title}}&nbsp;</h3></div>
                <div class="more">
                    <router-link :to=urlcat(item.subject) :title=item.title >更多>></router-link>
                </div>
            </div>
            <div class="box-content">
                <div class="col">
                        <i></i><h4>章节练习</h4><hr>
                    <ul v-for="listc in item.chapter_practice">
                        <li><a href="#">{{listc.content}}</a></li>
                    </ul>
                </div>
                <div class="col">
                    <i></i><h4>历年真题</h4><hr>
                    <ul v-for="listp in item.previous_exam">
                        <li><a href="#">{{listp.content}}</a></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default{
        data(){
            return{
                info:[]
            }
        },
        mounted(){
            var self = this;
            $.ajax({
                url: "src/data/index.json",
                type: "GET",
                success: function(data){
                    self.info = data.info;
                },
                error:function(data,status){
                    console.log(status)
                }
             });
            //console.log(self.info)
        },
        methods:{
            urlcat : function(subject){
                return subject + "/chapter";
            }
        }
    }
</script>
<style scoped>
    .row{
        border: 1px solid #4f8fff;
        margin-top: 45px;
        position: relative;/*相对于栏目块标题位置*/
    }

    .row:first-child{
        border-top: 1px solid #4f8fff;
    }

    .row:first-child .box-title i{
        background-image: url(/src/assets/img/cardio-machine-24px.png);
    }

/*——————————————圆圈特效————————————————*/
    .cir{
    	width: 1038px;
    }

    .cir > li{
    	width: 105px;
    	display: inline;
    }

    .sw{background-color: #4f8fff;}
    .cl{background-color: #f7cf5c;}
    .en{background-color: #d32f2f;}
    .ck{background-color: #e9acca;}
    .ma{background-color: #0d9e79;}

    .cir > li > a{
    	line-height: 135px;
    	display: inline-block;
    	cursor: pointer;
    	margin: 15px 30px;
    	width: 135px;
    	color: #fff;
    	height: 135px;
    	border-radius: 50%;
    	text-align: center;
    	position: relative;
    	z-index: 1;
    }

    .cir > li > a:after {
    	pointer-events: none;
    	position: absolute;
    	width: 100%;
    	height: 100%;
    	border-radius: 50%;
    	content: '进入>>';
    	line-height: 175px;
    	-webkit-box-sizing: content-box;
    	-moz-box-sizing: content-box;
    	box-sizing: content-box;
    }

    .cir > li > a:before {
    	font-size: 48px;
    	line-height: 90px;
    	font-style: normal;
    	font-weight: normal;
    	font-variant: normal;
    	text-transform: none;
    	display: block;
    	-webkit-font-smoothing: antialiased;
    }

    .cir > li > a {
    	-webkit-transition: background 0.2s, color 0.2s;
    	-moz-transition: background 0.2s, color 0.2s;
    	transition: background 0.2s, color 0.2s;
    }

    .cir > li > a:after, .sw:after,.cl:after,.en:after,.ck:after,.ma:after{
    	top: -7px;
    	left: -7px;
    	padding: 7px;
    	/*box-shadow: 0 0 0 4px;*/
    	-webkit-transition: -webkit-transform 0.2s, opacity 0.2s;
    	-webkit-transform: scale(.8);
    	-moz-transition: -moz-transform 0.2s, opacity 0.2s;
    	-moz-transform: scale(.8);
    	-ms-transform: scale(.8);
    	transition: transform 0.2s, opacity 0.2s;
    	transform: scale(.8);
    	opacity: 0;
    }
    .sw:after{box-shadow: 0 0 0 4px #2970f9;}
    .cl:after{box-shadow: 0 0 0 4px #f7c42a;}
    .en:after{box-shadow: 0 0 0 4px #b30000;}
    .ck:after{box-shadow: 0 0 0 4px #f57bb8;}
    .ma:after{box-shadow: 0 0 0 4px #008573;}

    .sw:hover{background-color: #2970f9;}
    .cl:hover{background-color: #f7c42a;}
    .en:hover{background-color: #b30000;}
    .ck:hover{background-color: #f57bb8;}
    .ma:hover{background-color: #008573;}

    .cir > li > a:hover:after {
    	-webkit-transform: scale(1);
    	-moz-transform: scale(1);
    	-ms-transform: scale(1);
    	transform: scale(1);
    	opacity: 1;
    }

    .box-title{
        /*width: 135px;*/
        top: -35px;
        left: 30px;
        position: absolute;
        background: #fff;
        padding-left: 5px;
    }

    .box-title > i{
    	width: 24px;
        height: 24px;
    	background-image: url(/src/assets/img/newspaper.png);
    }
    /*栏目块内容与上边距离*/
    .box-content{
        margin-top: 15px;
    }
    /*栏目块内的内容块*/
    .col{
        width: 535px;
        display: inline-block;
        padding: 20px;
    }

    .col > i{
    	width: 18px;
        height: 18px;
    }

    .col:first-child > i{
    	background-image: url(/src/assets/img/schedule-18px.png);
    }

    .col:last-child > i{
    	background-image: url(/src/assets/img/learning-18px.png);
    }

    .col hr{
        margin-top: 0;
        margin-bottom: 15px;
        border-top: 2px solid #4f8fff;
    }

    .col > ul{
        padding-left: 0px;
    }

    .col > ul > li{
        padding: 7px;
    }

    .col > ul > li > a{
        color: #333;
        font-weight: 500;
    }

    .col > ul > li > a:before{
        content: "\25C8\2003\2003";
    }

    .col > ul > li > a:hover{
        color: #4f8fff;
    }
</style>
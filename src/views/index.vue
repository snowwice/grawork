<template>
    <div class="container">
        <div class="row">
            <div class="box-title"><i></i><h3>试题模拟&nbsp;</h3></div>
            <div class="box-content">
                <ul class="cir">
                    <li><a href="#" class="sw"><h4>软件工程导论</h4></a></li>
                    <li><a href="#" class="cl"><h4>c语言</h4></a></li>
                    <li><a href="#" class="en"><h4>大学英语</h4></a></li>
                    <li><a href="#" class="ck"><h4>计算机文化基础</h4></a></li>
                    <li><a href="#" class="ma"><h4>高等数学</h4></a></li>
                </ul>
            </div>
        </div>

        <div class="row">
            <div class="box-head">
                <div class="box-title"><i></i><h3>软件工程导论&nbsp;</h3></div>
                <div class="more">
                    <router-link to="/Software">更多<div class="caret"></div></router-link>
                </div>
            </div>
            <div class="box-content">
                <div class="col">
                    <div class="col-head">
                        <i></i><h4>章节练习</h4><hr>
                    </div>
                    <ul>
                        <li><a href="#">2014年注册会计师考试全真历年真题</a></li>
                    </ul>
                </div>
                <div class="col">
                    <i></i><h4>历年真题</h4><hr>
                    <ul>
                        <li><a href="#">2014年注册会计师考试全真历年真题</a></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>
<script>

</script>
<style>
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
    	content: '进入》》';
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
</style>
<template>
    <div class="row">
        <div class="box-head">
            <div class="box-title"><i></i><h3>软件工程导论&nbsp;</h3></div>
            <div class="more">
                <a href="pages/subject.html">更多<div class="caret"></div></a>
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
</template>
<script>
    import HeaderComponent from './components/header.vue'
    import OtherComponent from './components/other.vue'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            'other-component':OtherComponent,
            HeaderComponent,
        }
    }
</script>

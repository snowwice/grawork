<template>
    <div class="container">
        <div class="row"><h4>题库在线系统 > {{convert($route.params.subject)}}</h4></div>
        <nav id="mode-block" class="navbar" role="navigation">
            <div class="container-fluid">
                <div class="navbar-nav">
                    <ul class="nav nav-justified">
                        <li><router-link :to="{params: { mode: 'chapter' }}" id="chapter_practice" class="active">章节练习</router-link></li>
                        <li><router-link :to="{params: { mode: 'previous' }}" id="previous_exam">历年真题</router-link></li>
                        <li><router-link :to="{params: { mode: 'mock' }}" id="mock_exam">试题模拟</router-link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="records">
            <div class="record-content" v-for="item in mode">
                <div class="record-title"><i></i><a>{{item.content}}</a></div>
                <router-link :to=urlcat($route.params.subject,item.id) class="btn btn-default pull-right" role="button"><i></i>开始做题</router-link>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .row{
        padding: 15px;
    }

    .navbar{
        margin-bottom: 0;
        border: 0;
        min-height:0;
    }

    .nav-justified > li{
        border: solid 1px #4f8fff;
    }

    .nav-justified > li:nth-child(2){
        border-left: 0;
        border-right: 0;
    }

    a{
        color: #666;
    }

    a:hover{
        color: #4f8fff;
    }

    i{
        width: 14px;
        height: 14px;
        margin: 5px 3px 0 0;
    }

    .active{
        background: #7eadff!important;
        color: #fff!important;
    }

    .records{
        margin-left: 15px;
        margin-right: 15px;
        border: 1px solid #2970f9;
        border-top: 0;

    }

    .record-content{
        padding: 20px 50px 30px;
        border-bottom: 1px dashed #2970f9;
    }

    .record-content:last-child{
        border-bottom: 0;
    }

    .record-title{
        display: inline-block;
    }

    .record-title i{
        margin-right: 10px;
        background-image: url(/src/assets/img/knowledge_base.png);
    }

    .btn i{
        margin-top: 0;
        background-image: url(/src/assets/img/icon_write.png);
    }
</style>
<script>
    export default{
        data(){
            return{
                chapter_practice: [], 
                previous_exam: [], 
                mock_exam: [],
                mode: [],
                title: {'English':'大学英语','Computer':'计算机应用基础','Math':'高等数学','Software':'软件工程导论','C':'C语言'}
            }
        },
        mounted(){
            var self = this;
            $.ajax({
                url: "src/data/subject.json",
                type: "GET",
                async: false,
                success: function(data){
                    //self.mode = data.info[0].chapter_practice;
                    self.chapter_practice = data.info[0].chapter_practice;
                     self.previous_exam = data.info[0].previous_exam; 
                    self.mock_exam = data.info[0].mock_exam;
                },
                error:function(data,status){
                    console.log(status)
                }
             });

            this.mode = this.chapter_practice;

            if(this.$route.path.indexOf("mock") > 0){
                this.mode = this.mock_exam;
                $("#mock_exam").addClass("active");
                $("#mock_exam").parent().siblings().children().removeClass("active");
            }

            $("a").click(function(e){
                var target = $(e.target);
                //*表示nav以下元素
                if(target.is("#mode-block li *")){
                    target.addClass("active");
                    target.parent().siblings().children().removeClass("active");
                }
                if(self.$route.path.indexOf("chapter") > 0){
                    self.mode = self.chapter_practice;
                };
                if(self.$route.path.indexOf("previous") > 0){
                    self.mode = self.previous_exam;
                };
                if(self.$route.path.indexOf("mock") > 0){
                    self.mode = self.mock_exam;
                };
            })
        },
        methods:{
            urlcat: function(subject,id){
                return this.mode_name + "/" + id;
            },
            convert: function(name){
                return this.title[name];
            }
        },
        //computed:{
        //    mode(){}
        //}
    }
</script>

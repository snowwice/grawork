<template>
    <div class="container">
        <div class="row"><h4>题库在线系统 > {{$route.params.subject}}</h4></div>
        <nav id="mode-block" class="navbar" role="navigation">
            <div class="container-fluid">
                <div class="navbar-nav">
                    <ul class="nav nav-justified">
                        <li><a id="chapter_practice" class="active">章节练习</a></li>
                        <li><a id="previous_exam">历年真题</a></li>
                        <li><a id="mock_exam">试题模拟</a></li>
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
                mode_name: []
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
                    //console.log(data)
                },
                error:function(data,status){
                    console.log(status)
                }
             });

            this.mode = this.chapter_practice;
            self.mode_name = "chapter";

            $("#mode-block").click(function(e){
                var target = $(e.target);
                //console.log(target);
                //console.log(target.is("nav *"));      //*表示nav以下元素
                if(target.is("#mode-block li *")){
                    target.addClass("active");
                    target.parent().siblings().children().removeClass("active");
                    //console.log(target.attr('id'));
                    switch(target.attr('id')){
                        case "chapter_practice" : {
                        self.mode = self.chapter_practice;
                        self.mode_name = "chapter";
                        }break;
                        case "previous_exam" : {
                        self.mode = self.previous_exam;
                        self.mode_name = "previous";
                        }break;
                        case "mock_exam" : {
                        self.mode = self.mock_exam;
                        self.mode_name = "mock";
                        }break;
                    }
                    console.log(self.mode_name); 
                }
            })
            //console.log(self.mode); 
            //console.log(self.previous_exam); 
            //console.log(self.mock_exam);
        },
        methods:{
            urlcat : function(subject,id){
                return subject + "/" + this.mode_name + "/" + id;
            }
        }
    }
</script>

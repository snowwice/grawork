<template>
    <div class="container">
        <bread-crumb></bread-crumb>
        <nav id="mode-block" role="navigation">
            <div class="container-fluid">
                    <ul class="mode-nav">
                        <li>
                            <router-link :to="{params: { mode: 'chapter' }}" id="chapter_practice" router-link-active>
                                章节练习
                            </router-link>
                        </li>
                        <li><router-link :to="{params: { mode: 'previous' }}" id="previous_exam">历年真题</router-link></li>
                        <li><router-link :to="{params: { mode: 'mock' }}" id="mock_exam">试题模拟</router-link></li>
                    </ul>
            </div>
        </nav>
        <div class="records">
            <div class="record-content" v-for="item in mode">
                <div class="record-title"><i></i><a>{{item.content}}</a></div>
                <router-link :to={path:urlcat(item.id),query:{path:item.path}} class="btn btn-default pull-right"><i></i>开始做题</router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                chapter_practice: [], 
                previous_exam: [], 
                mock_exam: [],
                mode: [],
                mode_name: [],
                info: []
            }
        },
        mounted(){
            var self = this;
            $.ajax({
                url: "http://localhost:8080/data/subject",
                type: "GET",
                async: false,
                success: function(data){
                    //console.log(data[0].info);
                    self.chapter_practice = data[0].info.chapter_practice;
                     self.previous_exam = data[0].info.previous_exam; 
                    self.mock_exam = data[0].info.mock_exam;
                }
             });
            //console.log(Object.keys(this.info));

            //$("body").css("color","red");

            this.mode = this.chapter_practice;
            self.mode_name = "chapter";

            if(this.$route.path.indexOf("mock") > 0){
                this.mode = this.mock_exam;
                self.mode_name = "mock";
            }
            //if(this.$route.path.indexOf("previous") > 0){
            //    this.mode = this.previous_exam;
            //}

            $("a").click(function(e){
                var target = $(e.target);
                //console.log(self.$route.path);
                //*表示nav以下元素
                if(self.$route.path.indexOf("chapter") > 0){
                    self.mode = self.chapter_practice;
                    self.mode_name = "chapter";
                };
                if(self.$route.path.indexOf("previous") > 0){
                    self.mode = self.previous_exam;
                    self.mode_name = "previous";
                };
                if(self.$route.path.indexOf("mock") > 0){
                    self.mode = self.mock_exam;
                    self.mode_name = "mock";
                };
            });

            //$.ajax({
            //    url: "http://127.0.0.1:3000",
            //    type: "POST",
            //    success: function(data){
            //        console.log(data);
            //    },
            //    error:function(data,status){
            //        console.log(status)
            //    }
            //});

        },
        methods:{
            urlcat: function(id){
                return this.mode_name + "/" + id;
            }
        }
    }
</script>
<style scoped>
    .row{
        padding: 15px;
    }

    .mode-nav{
        padding-left: 0px;
    }

    .mode-nav > li{
        display: table-cell;
    }

    .mode-nav > li > a{
        border: solid 1px #4f8fff;
        padding: 11px 96px;
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

    .active,.router-link-active{
        background: #7eadff!important;
        color: #fff!important;
    }

    .mode-nav > li > a{
        color: inherit;
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
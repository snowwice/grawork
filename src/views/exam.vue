<template>
    <div class="container">
        <bread-crumb></bread-crumb>
        <h2 class="text-center paper-title">{{info.name}}</h2>

        <h4>一、单选题</h4>
        <div v-for="(item,index) in info.choice" class="block-box">
            <form class="achoice">
                <div><h4>{{index + 1}}.{{item.question}}(&nbsp;&nbsp;)。</h4></div>
                <ol type="A" class="radio">
                    <input type="radio" name="optionsRadios" value="A" ref="input">
                    <li><h4>{{item.options[0]}}</h4></li>
                    <input type="radio" name="optionsRadios" value="B" ref="input">
                    <li><h4>{{item.options[1]}}</h4></li>
                    <input type="radio" name="optionsRadios" value="C" ref="input">
                    <li><h4>{{item.options[2]}}</h4></li>
                    <input type="radio" name="optionsRadios" value="D" ref="input">
                    <li><h4>{{item.options[3]}}</h4></li>
                </ol>
            </form>
        </div>

        <h4>二、多选题</h4>
        <div v-for="(item,index) in info.choices" class="block-box">
            <form class="choices">
                <div><h4>{{index + 1}}.{{item.question}}(&nbsp;&nbsp;)。</h4></div>
                <ol type="A" class="checkbox">
                    <input type="checkbox" value="A">
                    <li><h4>{{item.options[0]}}</h4></li>
                    <input type="checkbox" value="B">
                    <li><h4>{{item.options[1]}}</h4></li>
                    <input type="checkbox" value="C">
                    <li><h4>{{item.options[2]}}</h4></li>
                    <input type="checkbox" value="D">
                    <li><h4>{{item.options[3]}}</h4></li>
                    <input type="checkbox" value="E">
                    <li><h4>{{item.options[4]}}</h4></li>
                </ol>
            </form>
        </div>
        <button type="submit" class="btn btn-primary">提交</button>
        <!--<h4>三、填空题</h4>-->
        <!--<div v-for="(item,index) in info.blank">-->
            <!--<form ref="blank">-->
                <!--<div><h4>{{index + 1}}.{{item.question}}</h4></div>-->
            <!--</form>-->
        <!--</div>-->

    </div>
</template>
<script>
    export default{
        data(){
            return{
                info:[],
                selected:[]
            }
        },
        mounted(){
            var self = this;
            $.ajax({
                url: "src/data/exam.json",
                type: "GET",
                async: false,
                success: function(data){
                    self.info = data.info;
                    //console.log(self.info);
                },
                error:function(data,status){
                    console.log(status)
                }
             });
            //console.log(self.$ref);
            //console.log(this.info.blank[0].question)
            $("body").click(function(){
                console.log(self.$refs.input);
            });
        }
        //methods:{
        //    replaceBlank: function(data){
        //
        //    }
        //}
    }
</script>
<style scoped>
    li{
        margin-left: 15px;
    }

    input{
       margin-top: 13px;
    }

    .paper-title,.block-box{
        background:#FAFAFA;
        box-shadow: 0px 1px 10px #ccc;
    }

    .paper-title{
        padding: 30px;
        margin-bottom: 20px;
    }

    .block-box{
        padding:20px;
        margin:25px;
    }

    .btn-primary{ background-color: #4f8fff; }
</style>



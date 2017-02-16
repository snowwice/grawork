<template>
    <div class="container">
        <bread-crumb></bread-crumb>
        <h1 class="text-center">{{info.name}}</h1>
        <h4>一、单选题</h4>
        <div v-for="(item,index) in info.choice">
            <form class="achoice">
                <div><h4>{{index + 1}}.{{item.question}}(&nbsp;&nbsp;)。</h4></div>
                <ol type="A" class="radio">
                    <input type="radio" name="optionsRadios"><li><h4>{{item.options[0]}}</h4></li>
                    <input type="radio" name="optionsRadios"><li><h4>{{item.options[1]}}</h4></li>
                    <input type="radio" name="optionsRadios"><li><h4>{{item.options[2]}}</h4></li>
                    <input type="radio" name="optionsRadios"><li><h4>{{item.options[3]}}</h4></li>
                </ol>
            </form>
        </div>

        <h4>二、多选题</h4>
        <div v-for="(item,index) in info.choices">
            <form class="choices">
                <div><h4>{{index + 1}}.{{item.question}}(&nbsp;&nbsp;)。</h4></div>
                <ol type="A" class="checkbox">
                    <input type="checkbox"><li><h4>{{item.options[0]}}</h4></li>
                    <input type="checkbox"><li><h4>{{item.options[1]}}</h4></li>
                    <input type="checkbox"><li><h4>{{item.options[2]}}</h4></li>
                    <input type="checkbox"><li><h4>{{item.options[3]}}</h4></li>
                    <input type="checkbox"><li><h4>{{item.options[4]}}</h4></li>
                </ol>
            </form>
        </div>
    <button class="btn btn-primary">submit</button>
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
                info:[]
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
            //console.log(this.$refs);
            //console.log(this.info.blank[0].question)

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
</style>



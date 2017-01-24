<template>
    <div class="row">
        <h4>题库在线系统 > {{titlecat()}}</h4>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                subject: {'English':'大学英语','Computer':'计算机应用基础','Math':'高等数学','Software':'软件工程导论','C':'C语言'},
                mode:{'chapter':'章节练习','previous':'历年真题','mock':'试题模拟'}
            }
        },
        mounted(){
            var self = this;
            if(typeof(self.$route.params.subject) != "undefined"){
                    document.title = "题库在线系统-" + self.subject[self.$route.params.subject];
            }
            else document.title = "题库在线系统";
            $("a").click(function(){
                if(typeof(self.$route.params.subject) != "undefined"){
                    document.title = "题库在线系统-" + self.subject[self.$route.params.subject];
            }
            else document.title = "题库在线系统";
            });
        },
        methods:{
            titlecat(){
                var bc = this.$route.path.split("/"),
                    title = this.subject[bc[1]];
                if(bc.length == 4){
                    title += " > " + this.mode[bc[2]];
                }
                return title;
                //console.log(this.subject[bc[1]]);
            }
        }
    }
</script>
<style scoped>
    .row{
        padding: 15px;
    }
</style>
<template>
    <div class="container">
        <bread-crumb></bread-crumb>
        <iframe :src=this.$route.query.path width="800px" height="900px"></iframe>
    </div>
</template>
<script>
    export default{
        mounted(){
            //console.log(this.$route.query.name);
        }
    }
</script>
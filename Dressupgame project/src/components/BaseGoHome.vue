<script>
</script>
   
<template>
   <div class="body">
    <router-link :to="{ name: 'Play' }">
        <img id="home" src="Homie.png">
    </router-link>
    </div>
</template>

<style>
    #home {
        width:50px;
        height:50px;
        position: fixed;
        bottom: 0;
        left: 47%;
        margin-bottom: 10px;
        z-index: 999;
    }
</style>
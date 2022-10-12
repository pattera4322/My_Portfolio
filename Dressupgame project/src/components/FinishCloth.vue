<script setup>
import {ref, onBeforeMount } from 'vue';
defineEmits(['delete'])
defineProps({
  finClothes: {
    type: [Array, Object],
    require: true
  }
})

</script>
 
<template>
  <div class="body">
      <div id="con2" v-for="(cloth, index) in finClothes" :key="index">
  
         <img v-bind:src="cloth.sex" id="sex"> 
         <img v-bind:src="cloth.finTop" id="top"> 
         <img v-bind:src="cloth.finBot" id="bot"> 
         <img v-bind:src="cloth.finShoes" id="shoe"> 
         <button @click="$emit('delete',cloth.id)">DELETE</button>
      
      </div>
  </div>
        
</template>
 
<style scoped>
   
#con2{
  background-image: url("star.gif");
}
  img{
    display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  }

  #sex{
   position:static;
    z-index: 9;
    /* top: 20%; */
    /* right: 65%; */
    overflow: scroll;
    width:600px;
    height:600px;
  }

  #top{
     position: relative;
     z-index: 102;
     margin-top: -37.5em;
     /* left: -37.5em; */
     width:600px;
     height:600px;
  }

  #bot{
     position: relative;
     z-index: 100;
     margin-top: -37.5em;
     /* left: -75em; */
     width:600px;
     height:600px;
  }

  #shoe{
     position: relative;
     z-index: 102;
     margin-top: -37.5em;
     /* left: -112.5em; */
     width:600px;
     height:600px;
  }

  #con2 button:hover{
  background-position: 100% 0;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.6s ease-in-out;
  border-radius: 50px;
  border: none;
}

#con2 button{
  font-family: 'Hahmlet', serif;
  text-transform: uppercase;
  background-image: linear-gradient(
    to right,
    #ffc93c,
    #40a8c4,
    #a2d5f2,
    #e6739f
  );
  box-shadow: 0 4px 15px 0 #1e5f74;
  background-size: 300% 100%;
  color: #111;
  font-size: 20px;
  width: 150px;
  border-radius: 50px;
  border: none;
  height: 40px;
  margin-bottom: 10em;

  z-index: 99;
  
}

</style>
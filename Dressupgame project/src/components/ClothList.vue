<script setup>
import {ref, onBeforeMount } from 'vue';
defineEmits(['clothObj'])
defineProps({
  clothes: {
    type: [Array, Object],
    require: true
  },
  urlCloth: {
    type: String,
    require: true
  }
})

// const scrollCloth = (e) => {
//   // e.preventDefault();
//   scrollCloth.scrollBy({
//     left: e < 0 ? -30 : 30,
//   });
//   console.log('0|0');
// }
</script>
 
<template>
  <div id="cloth" class="scroll">
      <span v-for="(cloth, index) in clothes" :key="index" class="clip">
         <img v-bind:src="cloth.part" class="clothes" @click="$emit('clothObj',cloth.part)"> 
      </span>
  </div>
</template>
 
<style scoped>
  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }


  #cloth{
    border-style: solid;
    border-radius: 20px;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden ;
    max-width: 50rem;
    margin: 0 auto;
    position: relative;
    height: 225px;
    scrollbar-color: rgb(193, 114, 134) rgb(170, 166, 166);
    margin-bottom: 15px;
  }

.scroll::-webkit-scrollbar {
  width: 1em;
  height: 1em;
}
.scroll::-webkit-scrollbar-thumb:hover {
  background: hsl(120 100% 10% / 1);
}


/* Track */
.scroll::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 50px;
}
 
/* Handle */
.scroll::-webkit-scrollbar-thumb {
  background: rgb(27, 109, 0); 
  border-radius: 10px;
}
  /* #cloth span img{
    border-radius: 8px;
    background-color: white;
    background: transparent 50%;
    padding: 2rem 3rem;
    margin: 2rem 1rem;
  } */

  .clothes{
    width: 200px;
    height: 200px;
    position: relative;
    padding-top: 10px;
    bottom: 50px;
  }

  .clothes:hover{
    width:280px;
    height:280px;
    transition: 0.6s;
    z-index: 200;
  }
  
</style>
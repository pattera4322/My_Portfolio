<script setup>
import { ref, onBeforeMount, computed } from "vue";
import ClothList from "../components/ClothList.vue";
import BaseButton from "../components/BaseButton.vue";
import BaseGoHome from '../components/BaseGoHome.vue';
// import createCloth from "../components/createCloth.vue";


const sex = "women/women.png";
const clothJson = ref([]);
const getclothList = async () => {
  const res = await fetch(`http://localhost:5000/clothes`);
  if (res.status === 200) {
    clothJson.value = await res.json();
    console.log(clothJson.value);
  } else {
    console.log("error");
  }
};
onBeforeMount(async () => {
  await getclothList();
});

const createClothes = async (sex,top,bottom,shoe) => {
  console.log('success')
 
  const res = await fetch(`http://localhost:5000/Add`,{
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({sex: sex,finTop: top,finBot: bottom,finShoes: shoe})
  })
  if (res.status === 201) {
    const finishedCloth = await res.json()
    clothJson.value.push(finishedCloth)
    console.log('added sucessfully')
  } else console.log('error, cannot be added')
} 

let top = ref("empty.png");
let bottom = ref("empty.png");
let shoe = ref("empty.png");
const clickTop = (e) => (top.value = e);
const clickBottom = (e) => (bottom.value = e);
const clickShoes = (e) => (shoe.value = e);


</script>

<template>
  <div class="body">
    <h1>Women Dress up</h1>
    <img class="women" src="women/women.png" width="600" height="600" />
    <div>   
      <img :class="bottom != ``? 'enable':'disable'" v-bind:src="bottom" id="bottom"/>
      <img :class="shoe != ``? 'enable':'disable'" v-bind:src="shoe" id="shoe"/>
      <img :class="top != ``? 'enable':'disable'" v-bind:src="top" id="top"/>
    </div>

    <div class="wardrode">
      <h2>Wardrobe</h2>
      <ClothList :clothes="clothJson.topWomen" @clothObj="clickTop" />
      <ClothList :clothes="clothJson.bottomWomen"  @clothObj="clickBottom" />
      <ClothList :clothes="clothJson.shoesWomen"  @clothObj="clickShoes" />
    </div>

    <router-link :to="{ name: 'Finish' }">
      <!-- <createCloth @createCloth="createClothes" /> -->
      <BaseButton yourText="Finish" id="Finish" @click="createClothes(sex,top,bottom,shoe)"/>
    </router-link>
    <BaseGoHome/>
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Changa+One&display=swap&family=Hahmlet:wght@300');
  h1 {
    font-size: 6em;
    font-family: 'Changa One', cursive;
    color: rgb(246, 147, 108);
  text-shadow: -3px 0 rgb(255, 255, 255), 0 3px rgb(210, 192, 192), 3px 0 rgb(225, 121, 121), 0 -3px rgb(255, 255, 255);
  }
 h2 {
    font-size: 2em;
    font-family: 'Changa One', cursive;
 }

#Finish:hover{
  background-position: 100% 0;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.6s ease-in-out;
  border-radius: 50px;
  border: none;
}

#Finish{
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
  position:absolute;
  top: 80%;
  left:280px;
  z-index: 99;
  
}
.women {
 position: absolute;
  z-index: 9;
  top: 20%;
  right: 65%;
  overflow: scroll;
}
#top {
  position: absolute;
    z-index: 99;
    top: 20%;
    right: 65%;
    width:600px;
    height: 600px;
}
#bottom {
  position: absolute;
    z-index: 99;
    top: 20%;
    right: 65%;
    width:600px;
    height: 600px;
}
#shoe {
  position: absolute;
    z-index: 99;
    top: 20%;
    right: 65%;
    width:600px;
    height: 600px;
}
.wardrode {
  margin-right: 100px;
  margin-bottom: 100px;
  position: absolute;
  z-index: 99;
  top: 15%;
  left: 40%;
}
.disable {
    display: none;
}
.enable {
    display: inline;
}
</style>

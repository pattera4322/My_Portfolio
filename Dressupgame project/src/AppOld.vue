<script setup>

import {ref} from 'vue'
  const gender = ref(["src/assets/men/man.png","src/assets/women/woman.png"])
   //Men clothes
  const topsMen = ref(["src/assets/men/topM1.png","src/assets/men/topM2.png","src/assets/men/topM3.png","src/assets/men/topM4.png","src/assets/men/topM5.png"])
  const bottomsMen = ref(["src/assets/men/bottomM1.png","src/assets/men/bottomM2.png","src/assets/men/bottomM3.png","src/assets/men/bottomM4.png","src/assets/men/bottomM5.png"])
  const shoesMen = ref(["src/assets/men/shoeM1.png","src/assets/men/shoeM2.png","src/assets/men/shoeM3.png","src/assets/men/shoeM4.png","src/assets/men/shoeM5.png"])
  //women clothes
  const topsWomen = ref(["src/assets/women/topW1.png","src/assets/women/topW2.png","src/assets/women/topW3.png","src/assets/women/topW4.png","src/assets/women/topW5.png"])
  const bottomsWomen = ref(["src/assets/women/bottomW1.png","src/assets/women/bottomW2.png","src/assets/women/bottomW3.png","src/assets/women/bottomW4.png","src/assets/women/bottomW5.png"])
  const shoesWomen = ref(["src/assets/women/shoeW1.png","src/assets/women/shoeW2.png","src/assets/women/shoeW3.png","src/assets/women/shoeW4.png","src/assets/women/shoeW5.png"])
 //Finish clothes
  const outfit = ref(["src/assets/empty.png","src/assets/empty.png","src/assets/empty.png"])

  const whatGender = ref(false)
  const sex = ref('')
  const startButton = ref(false)
  const dressup = ref(false)
  const firstPage = ref(true)
  const name= ref('')

  const musicOn = ref(true)
  const musicPause = 'musicpause'
  const musicPlay = 'musicplay'
  const audio = new Audio ("src/assets/song.mp3");
  const playMusic =  (musicOn) => musicOn == true  ? audio.pause() : audio.play() ;

  const play = "src/assets/play.png";
  const pause = "src/assets/pause.png";  
 

  //random outfit function
  const random = (part,index) => {
     return outfit.value[index]= part[Math.floor(Math.random()*5)]
    }
  //reset outfit function
  const reset = () => {
    outfit.value = ["src/assets/empty.png","src/assets/empty.png","src/assets/empty.png"]
    firstPage.value = true
    dressup.value = false
    name.value = ''
    startButton.value = false
    sex.value = ''
  }
</script>
 
<template>
<div class="body">
  <div v-show="firstPage">
    <!-- <h1 class="pt-5">Welcome! Don't know what to wear</h1>
    <h3>First, choose your gender!!</h3>

    -- choose gender button --
    <span class="tooltip-container">
      <img src="src/assets/men/man-button.png" class="tran" width="300" height="300" @click="whatGender = true , startButton = true , sex = 'men'">
      <span class="tooltip">man</span>
    </span>
    
    <span class="tooltip-container">
      <img src="src/assets/women/women-button.png" class="tran" width="300" height="300" @click="whatGender = false , startButton = true , sex = 'women'">
      <span class="tooltip">woman</span>
    </span>

    -- show gender --
    <div v-show="startButton" id="textbox">
    
    <div v-if="whatGender == true" id="inputtext">
     <div class="input-group mb-2">
       <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">        
             <img src="src/assets/men/man-sign.png" width="24" height="24">
           </span>
       </div>
      <input v-model="name" type="text" class="col-xs-2" placeholder="Your's name" aria-label="Username" aria-describedby="basic-addon1">
      </div> 
    </div>

    <div v-else-if="whatGender == false" id="inputtext">
      <div class="input-group mb-2">
       <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">        
             <img src="src/assets/women/woman-sign.png" width="24" height="24">
           </span>
       </div >
      <input v-model="name" type="text" class="col-xs-2" placeholder="Your's name" aria-label="Username" aria-describedby="basic-addon1">
     </div>  
    </div>

    -- start button --
      <button type="button" class="btn-hover color-6" @click="dressup = true,firstPage = false" id = "buttonStart">START</button>
    </div>
  </div>

  -- music button --
  <div :class="musicOn == true? musicPause : musicPlay" 
  @click="playMusic(!musicOn), musicOn == true? musicOn = false : musicOn = true">
    <img :src="musicOn == true ? play : pause" width="50" height="50"> 
  </div> -->

  <!--Dress up-->  
  <div v-show="dressup" class="float-left" >
    <h1 id ="name">{{ name }}</h1>
    <p v-if="whatGender == true">
      <img class="baseImg" :src="gender[0]" width="600" height="600" >
    </p>
    <p v-else-if="whatGender == false" >
      <img class="baseImg" :src="gender[1]" width="600" height="600">
    </p>
    <div>
      <img :src="outfit[0]" class="tops" width="600" height="600">
      <img :src="outfit[1]" class="pants" width="600" height="600">
      <img :src="outfit[2]" class="shoes" width="600" height="600">
    </div>

    <div>
      <button type="button" id="resetButton" class="btn-hover color-7" @click="reset">RESET</button>
    </div>
  </div>

  <!-- random clothes button--> 
  <div v-show="dressup" class="float-right" id="clothesBtn">
      <div><button type="button" class="btn-hover color-8" @click="sex === 'men'? random(topsMen,0):random(topsWomen,0)">TOPS</button></div>
      <div><button type="button" class="btn-hover color-8" @click="sex === 'men'? random(bottomsMen,1):random(bottomsWomen,1)">PANTS</button></div>
      <div><button type="button" class="btn-hover color-8" @click="sex === 'men'? random(shoesMen,2):random(shoesWomen,2)">SHOES</button></div>
  </div>
</div>
</div>  
</template>
 
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hahmlet:wght@300&family=Playfair+Display:wght@800&display=swap');
  h1 {
   font-family: 'Playfair Display', serif;
  }
  h3 {
    font-family: 'Hahmlet', serif;
  }
  .body {
    text-align: center;
    background-image: 
    radial-gradient(at 1% 17%, #f3d1f4, transparent 50%),
    radial-gradient(at 80% 10%, #f5fcc1, transparent 50%),
    radial-gradient(at 90% 90%, #bae5e5, transparent 50%),
    radial-gradient(at 14% 91%, #98d6ea, transparent 50%);
    background-attachment: fixed;
    height: 100vh;
  }
  .hidden {
    visibility: hidden;
  }
  .float-left {
    float: left;
  }
  .tran{
    margin: 80px;
  }
  .tran:hover{
    width:340px;
    height:330px;
    transition: 0.6s;
  }
  .musicplay , .musicpause {
    position: absolute;
    left: 95%; 
    top: 90%; 
    transform:translate(-50%, -50%);
  }
  #inputtext {
    position: absolute;
    left: 50%; 
    top: 65%; 
    transform:translate(-50%, -50%);
  }
  #buttonStart{
    position: absolute;
    left: 50%; 
    top: 72%; 
    transform:translate(-50%, -50%);
  }
  #name{
     position: absolute;
     top: 2%;
     left: 46%;
  }
  /* button style */
.buttons {
  margin: 10%;
  text-align: center;
}
.btn-hover {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  height: 55px;
  text-align: center;
  border: none;

  border-radius: 50px;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}
.btn-hover:hover {
  background-position: 100% 0;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}
.btn-hover:focus {
  outline: none;
}
.btn-hover.color-6 {
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
}
.btn-hover.color-7 {
  background-image: linear-gradient(
    to right,
    #70a1d7,
    #a1de93,
    #f7f48b,
    #77acf1
  );
  box-shadow: 0 4px 15px 0 #1e5f74;
  background-size: 200% 100%;
  color: #111;
  width: 150px;
}

.btn-hover.color-8 {
  background-image: linear-gradient(
    to right,
    #ffdd94,
    salmon,
    #ff9292,
    #fbeeac
  );
  box-shadow: 0 4px 15px 0 #4d446f;
  color: black;
  background-size: 250% 100%;
  width: 100px;
}
.baseImg{
  position: absolute;
  z-index: 99;
  top: 15%;
  right: 50%;
}

#clothesBtn{
  position: absolute;
  top: 20%;
  right: 25%;
}

#resetButton{
  position: absolute;
  top: 85%;
  right: 45%;
  }


.tooltip-container {
  cursor: pointer;
  position: relative;
}

.tooltip {
  opacity: 0;
  color: #bbb;
  width: 90px;
  display: block;
  font-size: 12px;
  padding: 5px 8px;
  border-radius: 3px;
  text-align: center;
  text-shadow: 1px 1px 2px #111;
  background: #2f2f2f;
  border: 1px solid black;
  box-shadow: 0 0 3px black;
  position: absolute;
  right: 200px;
  bottom: 150px;
}

tooltip:before,
.tooltip:after {
  content: '';
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #2f2f2f;
  position: absolute;
  bottom: -10px;
  left: 43%;
}

.tooltip-container:hover .tooltip,
a:hover .tooltip {
  opacity: 1;
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -o-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

.tops{
  position: absolute;
  z-index: 102;
  top: 15%;
  right: 50%;

}
.pants{
  position: absolute;
  z-index: 100;
  top: 15%;
  right: 50%;

}
.shoes{
  position: absolute;
  z-index: 101;
  top: 15%;
  right: 50%;

}
</style>
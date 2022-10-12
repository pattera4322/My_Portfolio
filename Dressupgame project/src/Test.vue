<script setup>
import {ref , onBeforeMount} from 'vue'
import ClothList from './components/ClothList.vue'


const clothJson = ref([])
const getclothList = async () => {
    const res = await fetch(`http://localhost:5000/clothes`)
    if(res.status === 200){
        clothJson.value = await res.json()
        console.log(clothJson.value)
        console.log(clothJson.value.part)
    }else{ console.log("error kuay") }
}
onBeforeMount(async () => {
  await getclothList()
});

</script>
 
<template>
<div>
    <h2>Wardrobe</h2>
    <ClothList :clothes = 'clothJson.topWomen'/>
    <ClothList :clothes = 'clothJson.bottomWomen'/>
    <ClothList :clothes = 'clothJson.shoesWomen'/>
</div>
</template>
 
<style>

</style>
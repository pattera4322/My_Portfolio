 
 <script setup>
 
</script>
  
 <template>
    <div class="body">
        <h1>Welcome!</h1>
        <h3>First, choose your gender!!</h3><br>

        <span class="block">
          <router-link :to="{ name: 'Men' }">
              <img src="men/man-button.png" class="hoverpic" width="300" height="300">
              <span class="tooltip">man</span>
          </router-link>
        </span>

        <span class="block">
          <router-link :to="{ name: 'Women' }">
              <img src="women/women-button.png" class="hoverpic" width="300" height="300">
              <span class="tooltip">woman</span>
          </router-link>
        </span>
    </div>
</template>
  
 <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Hahmlet:wght@300&family=Playfair+Display:wght@800&display=swap');
    .block {
        top: 10%;
        margin-left: 80px;
        margin-right: 80px;
        position: relative;
    }

     .hoverpic {
        margin-bottom: 4em;
      } 

    .block :hover .hoverpic {
        width:340px;
        height:330px;
        transition: 0.6s;
    }

    h1 {
      font-size: 5em;
      color: rgb(255, 211, 67);
      text-shadow: -3px 0 black, 0 3px black, 3px 0 black, 0 -3px black;
       padding-top: 5% ;
       font-family: 'Playfair Display', serif;
    }

    h3 {
      font-size: 2em;
        font-family: 'Hahmlet', serif;
        padding-bottom: 1em;
}

    .tooltip {
      opacity: 0;
      color: #bbb;
      width: 90px;
      display: block;
      font-size: 14px;
      padding: 5px 8px;
      border-radius: 3px;
      text-align: center;
      text-shadow: 1px 1px 2px #111;
      background: #2f2f2f;
      border: 1px solid black;
      box-shadow: 0 0 3px black;
      position: absolute;
      right: 200px;
      bottom: 180px;
    }

  .tooltip:before,
  .tooltip:after {
    content: '';
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #2f2f2f;
    position: absolute;
    bottom: -10px;
    left: 43%;
  }

  a:hover .tooltip {
    opacity: 1;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -o-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  } 
  .body{
  background-image: url("star.gif");
}

</style>
 
 
 

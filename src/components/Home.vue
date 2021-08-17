<template>
    <div id="top">
        <div id="main">
            <vue-typer :text="['Welcome to my portfolio.\n']" class="top-text" :repeat='0'
            :preTypeDelay="1000" :typeDelay="120" :preEraseDelay="5000" :eraseDelay="2000">
            </vue-typer>
        </div>
        <vue-particles class="particles"></vue-particles>
    </div>

</template>

<script>
</script>
<style>

#main{
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
.main-image-title {
  font-size: 70px;
  padding-top: 250px;
}
.masa {
  color: rgba(65, 184, 131);
}
@media screen and (max-width: 800px) {
  .main-image-title {
    font-size: 50px;
    padding-top: 150px;
  }
}


.top-text{
  color: whitesmoke;
  font-size: 50px;
}
.particles{
  z-index: 1;
  height: 100vh;
}
</style>
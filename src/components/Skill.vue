<template>
 <div>
     <div class="container mt-5 px-5">
        <h1 class="mb-4">SKILLS</h1>
            <ul class="works">
                <li class="card">
                    <img class="card-img" src="@/assets/skills/html-css.png" alt="">
                    <div class="card-content">
                        <h1 class="card-title jp">HTML, CSS</h1>
                    </div>
                </li>
                <li class="card">
                    <img class="card-img" src="@/assets/skills/js.png" alt="">
                    <div class="card-content">
                        <h1 class="card-title jp">Javascript</h1>
                    </div>
                </li>
                <li class="card">
                    <img class="card-img" src="@/assets/skills/vue.png" alt="">
                    <div class="card-content">
                        <h1 class="card-title jp">Vuet</h1>
                    </div>
                </li>
                <li class="card">
                    <img class="card-img" src="@/assets/skills/react.png" alt="">
                    <div class="card-content">
                        <h1 class="card-title jp">React</h1>
                    </div>
                <li class="card">
                    <img class="card-img" src="@/assets/skills/ts.png" alt="">
                    <div class="card-content">
                        <h1 class="card-title jp">TypeScript</h1>
                    </div>
                </li>
                <li class="card">
                    <img class="card-img" src="@/assets/skills/firebase.png" alt="">
                    <div class="card-content">
                        <h1 class="card-title jp">Firebase</h1>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
.works{
  list-style-type: none;
}
.jp{
  font-weight: 100;
}
.card-lang{
  font-weight: 500;
}
.card {
  float: left;
  margin: 0 1% 30px;
  padding: 0;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}
.card-img {
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: 200px;
  object-fit: contain;
}
.card-content {
  padding: 20px;
}
.card-title {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}
.card-text {
  color: #777;
  font-size: 14px;
  line-height: 1.5;
}
.card-link{
  border: 2px solid #00aaff;
  text-decoration: none;
  color: #00aaff;
  margin: 0 10px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: 0.4s;
  font-weight: bold;
}




</style>
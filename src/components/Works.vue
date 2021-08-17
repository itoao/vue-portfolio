<template>
    <div>
        <div class="container mt-5 px-5">
            <h1 class="mb-4">WORKS</h1>
            <ul class="works">
                <li class="card">
                    <img class="card-img" src="@/assets/works/todo-timer.png" alt="">
                    <div class="card-content">
                    <h1 class="card-title jp">TODOアプリ</h1>
                    <p class="card-text">タスク管理とタイマーがセットになっているアプリ</p>
                    <p class="card-lang">React, TypeScript, firebase</p>
                    <br>
                    <a href="https://udemy-todo-31e55.web.app/" class="card-link">Website</a>
                    <a href="https://github.com/itoao/todo_app" class="card-link github-link">Github</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>

</script>

<style>
.works{
  list-style-type: none;
  padding-left: 0;
  text-align: center;
  padding-left: 15%;
  padding-right: 15%;
}
.jp{
  font-weight: 100;
}
.card-lang{
  font-weight: 500;
}
.card {
  display: inline-block;
  margin: 30px 60px;
  width: 350px;
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
.card-link:hover {
  background-color: #00aaff;
  color: white;
}
.github-link{
  border-color: #171515;
  color: #171515;
}
.github-link:hover {
  background-color: #171515;
  color: white;
}

</style>
<template>

    <div>
        <div class="container mt-5 px-5">
            <h1 class="mb-4">CONTACT</h1>
            <p>御用の際は、こちらのメールアドレスにお問い合わせをお願いいたします。</p>

                <div class="link">
                    <a href="http://github.com/itoao" class="link-icon"><font-awesome-icon :icon="['fab','github']" class="web-icon github"/></a>
                    <p class="text"></p>
                </div>

                <div class="link">
                    <a href="mailto:college6237@gmail.com" class="link-icon"><font-awesome-icon icon=envelope class="web-icon mail" /></a>
                    <p class="text"></p>
              </div>
        </div>
  </div>


</template>
<style scoped>
.link{
    display:inline-flex;
    width: 30%;
    justify-content: center;
    size: 60px;
}
.link-icon{
    margin: 0 10px;
    margin-bottom: 20px;
    size: 50px;
}

.mail{
    size: 60px;
}
.mail:hover{
    background-color: #7da8b3;
}
.github{
    color: #171515;
}
.github:hover{
    background-color: #171515;
}
</style>
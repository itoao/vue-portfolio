<template>

    <div>
        <div class="container mt-5 px-5">
            <h1 class="mb-4">CONTACT</h1>
                <div class="link">
                    
                    <a href="http://github.com/itoao" class="link-icon"><font-awesome-icon :icon="['fab','github']" class="web-icon github"/></a>
                    <p class="text"></p>
                </div>

                <div class="link">
                    <h2><a href="mailto:college6237@gmail.com" class="link-icon" font-awesome-icon icon="" /> Birthday</h2>
                    <p class="text">2001-03-24</p>
              </div>
        </div>
  </div>
 

</template>
<style >
.link{
    display:inline-flex;
    width: 30%;
    justify-content: center;
}
.link-icon{
    margin: 0 10px;
    margin-bottom: 20px;
}

.mail{
    color: #DD5144;
}
.mail:hover{
    background-color: #DD5144;
}
.github{
    color: #171515;
}
.github:hover{
    background-color: #171515;
}
</style>
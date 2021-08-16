<template>
  <nav class="navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <!-- pc -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <h1 class ="nav-title">ao ito</h1>
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link class="nav-link px-4 py-3" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-4 py-3" to="/Introduction">
              Introduction
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-4 py-3" to="/Language">
              Used Languages
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-4 py-3" to="/Portfolio">
              Portfolio
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-4 py-3" to="/Contact">
              Contact
            </router-link>
          </li>
        </ul>
      </div>
      <!-- sp -->
      <ul class="sp px-5">
        <li>
          <router-link class="ancar text-white" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="ancar text-white" to="/Introduction">
            Introduction
          </router-link>
        </li>
        <li>
          <router-link class="ancar text-white" to="/Language">
            Used Languages
          </router-link>
        </li>
        <li>
          <router-link class="ancar text-white" to="/Portfolio">
            Portfolio
          </router-link>
        </li>
        <li>
          <router-link class="ancar text-white" to="/Contact">
            Contact
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
nav {
  height: 56px;
}
.nav-title{
    color: rgb(165, 167, 164);
}
.nav-link:hover {
  background-color: rgba(65, 184, 131, 0.5);
  transition: 0.5s;
}
.sp {
  display: none;
}
@media screen and (max-width: 800px) {
  .collapse {
    display: none;
  }
  .sp {
    display: block;
  }
  nav {
    height: 80px;
  }
  ul {
    overflow: hidden;
  }
  ul li {
    float: left;
    list-style: none;
  }
  .ancar {
    display: block;
    padding: 4px 4px;
  }
}
</style>
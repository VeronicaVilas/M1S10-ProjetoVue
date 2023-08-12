<template>
  <header>
    <div class="circle"></div>
    <nav>
      <ul class="menu">
        <router-link to="/" class="item-menu">
          <li>
            <h2>Home</h2>
          </li>
        </router-link>

        <router-link to="/cadastro" class="item-menu">
          <li>
            <h2>Cadastro</h2>
          </li>
        </router-link>

        <router-link to="/sobre" class="item-menu">
          <li>
            <h2>Sobre</h2>
          </li>
        </router-link>
      </ul>
    </nav>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
.menu {
  width: 60%;
  padding: 18px;
  margin: 0px auto;
  gap: 16px;

  display: flex;
  justify-content: center;
  list-style: none;
}

.item-menu {
  display: flex;
  border: 2px solid white;
  padding: 5px;
  width: 33%;

  background: linear-gradient(45deg, #E8CBC0, #636FA4);
  text-decoration: none;
}

.item-menu li {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;
  width: 100%;

  background-color: #1B2029;
}
.circle {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(45deg, #E8CBC0, #636FA4);
  clip-path: circle(40% at right 80%);
  z-index: -1;
}
</style>

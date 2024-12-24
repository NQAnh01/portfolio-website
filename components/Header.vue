<template>
  <header>
    <nav>
      <div>
        <NuxtLink to="/" class="logo">
          <img src="/tkl.png" alt="Logo" class="img-logo" />
        </NuxtLink>
      </div>
      <ul class="navbar">
        <li
          v-for="(item, index) in navbarItems"
          :key="index"
          class="navbar-item"
        >
          <NuxtLink :to="item.url" class="navbar-link">
            <i :class="item.icon"></i>
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { navbarItems } from "../data/navBar";
</script>

<style scoped>
nav {
  background-color: #f8f9fa;
  padding: 10px 20px;
  display: flex;
}
.navbar {
  display: flex;
  /* justify-content: space-around; */
  list-style-type: none;
  padding: 0;
}

.navbar-item {
  margin: 10px 20px;
}

.navbar-link {
  text-decoration: none;
  font-size: 18px;
  color: #333;
  display: flex;
  align-items: center;
  /* gap: 8px; */
}

.navbar-link i {
  margin-right: 8px;
}

.navbar-link:hover {
  color: #007bff;
}
.img-logo {
  width: 64px;
  height: 64px;
}
</style>

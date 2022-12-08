<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Nuxt Shop</NuxtLink>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products">Products</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <!-- output the page content -->
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
 .router-link-exact-active {
    color: #e4eff0;
 }
</style>
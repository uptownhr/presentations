<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Page Component</h1>
          <h2 class="subtitle">
            All things you can do with page component
          </h2>
        </div>
      </div>

      <div class="hero-foot">
        <nav class="tabs is-boxed">
          <div class="container">
            <ul>
              <nuxt-link exact to="/page-component" tag="li"><a>Overview</a></nuxt-link>
              <nuxt-link to="/page-component/dynamic" tag="li"><a>Dynamic Routes</a></nuxt-link>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <nuxt-child />
  </div>
</template>

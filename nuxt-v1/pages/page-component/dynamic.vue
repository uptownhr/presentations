<template>
  <section class="section">
    <div class="container">
      <h1 class="title"><nuxt-link to="/page-component/dynamic">Dynamic Routes</nuxt-link></h1>

      <div class="columns">
        <div class="column is-3">
          <div class="box">
            <ul class="menu-list">
              <h2 class="subtitle">Listing</h2>
              <nuxt-link tag="li" to="/page-component/dynamic/vuejs-la"><a>VueJS La</a></nuxt-link>
              <nuxt-link tag="li" to="/page-component/dynamic/brad-ito"><a>Brad Ito</a></nuxt-link>
              <nuxt-link tag="li" to="/page-component/dynamic/james-lee"><a>James Lee</a></nuxt-link>
              <nuxt-link tag="li" to="/page-component/dynamic/bambee"><a>Bambee</a></nuxt-link>
            </ul>
          </div>
        </div>
        <div class="column is-8">
          <nuxt-child :key="$route.params.name" />
        </div>
      </div>
    </div>
  </section>
</template>

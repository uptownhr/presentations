<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <!-- navbar items, navbar burger... -->
        <nuxt-link class="navbar-item" to="/">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </nuxt-link>

        <button
          @click="toggle_nav"
          class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu" :class="{'is-active': mobile_active}">
        <nuxt-link to="/page-component" class="navbar-item" active-class="is-active">Page Component</nuxt-link>
        <nuxt-link to="/nuxt-config" class="navbar-item">Nuxt Config</nuxt-link>
        <nuxt-link to="/hacker-news" class="navbar-item">News</nuxt-link>
      </div>
    </nav>
    <nuxt/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    computed: {
      mobile_active () {
        return this.$store.state.nav.mobile_active
      }
    },

    methods: {
      toggle_nav () {
        this.$store.commit('toggle_mobile_nav')
      }
    }
  }
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

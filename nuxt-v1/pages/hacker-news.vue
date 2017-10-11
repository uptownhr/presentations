<template>
  <section class="section">
    <div class="container">
      <h1 class="title"><nuxt-link to="/page-component/dynamic">Dynamic Routes</nuxt-link></h1>

      <div class="columns">
        <div class="column is-3">
          <div class="box">
            <ul class="menu-list">
              <h2 class="subtitle">HN Stories</h2>
              <nuxt-link
                v-for="story in stories"
                :key="story"
                tag="li"
                :to="`/hacker-news/${story}`"
              >
                <a>{{story}}</a>
              </nuxt-link>
            </ul>
          </div>
        </div>
        <div class="column is-8">
          <nuxt-child v-if="$route.params.id" :key="$route.params.id" />
        </div>
      </div>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    async asyncData ({app}) {
      const stories = await app.$axios.get('/topstories.json').then(res => res.data)

      return {
        stories
      }
    }
  }
</script>

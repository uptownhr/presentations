<template>
  <div class="content">
    <h1>{{story.title}}</h1>
    <iframe
      style="width: 100%; height: 100vh"
      :src="story.url"
    ></iframe>
  </div>
</template>


<script type="text/ecmascript-6">
  export default {
    async asyncData ({app, route}) {
      const story = await app.$axios.get(`/item/${route.params.id}.json`).then(res => res.data)

      return {
        story
      }
    }
  }
</script>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title">{{page_data.label}}</h1>
    </div>
  </section>
</template>


<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        'vuejs-la': {
          label: 'VueJS Los Angeles'
        },

        'brad-ito': {
          label: 'Brad Ito'
        },

        'james-lee': {
          label: 'James Lee'
        },

        'bambee': {
          label: 'Bambee - Where James works'
        }
      }
    },

    computed: {
      page_data () {
        return this[this.$route.params.name]
      }
    }
  }
</script>

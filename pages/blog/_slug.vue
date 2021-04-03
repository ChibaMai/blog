<template>
  <article>
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article" />
    <!-- <div> {{ article }} </div> -->
    <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>

    <nav id="n">
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>

    <div class="bg-blue-500 text-white p-4 mb-4">
      This is HTML inside markdown that has a class of note
    </div>

  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch();

    return { article }
  },

  methods: {
    formatDate(date) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }

      return new Date(date).toLocaleDateString('en', options)
    }
  },

}
</script>

<style>
#n {
  position: fixed;
  right: 0;
  top: 0;
  background-color: red;
}

#n a {
  color: white;
}
</style>

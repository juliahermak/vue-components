<template>
  <div class="main">
    <div class="start-button">
      <v-btn v-for="item in items" :href="item.href" append-icon="mdi-plus">
        Створити рецепт
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          href: "/card",
        },
      ],
    };
  },
};
</script>
<style scoped>
.main {
  margin: 32px;
}
</style>

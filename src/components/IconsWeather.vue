<template>
  <div>
    <img :width="width" v-if="precipitation > 15" src="rain.svg" />
    <img :width="width" v-else-if="precipitation === 0" src="sun.svg" />
    <img :width="width" v-else-if="precipitation < 15" src="cloudy.svg" />
  </div>
</template>
<script>
export default {
  props: {
    precipitation: {
      type: Number,
    },
    width: {
      type: Number,
    },
  },
};
</script>
<style></style>

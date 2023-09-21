<template>
  <div id="app">
    <v-file-input
      v-model="image"
      type="file"
      class="input"
      label="Фото страви"
      prepend-icon="mdi-camera"
      outlined
      dense
      @change="onFileChange"
    />

    <h4 class="color--text">Вибране фото</h4>
    <v-img class="style--img" :src="imageUrl" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: undefined,
      // to save image url
      imageUrl: "",
    };
  },
  methods: {
    createImage(file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }
      this.createImage(files[0]);
    },
  },
};
</script>
<style>
.color--text {
  color: rgb(142, 142, 142);
}
.style--img {
  border: 1px dashed rgb(152, 152, 152);
  min-width: 250px;
  max-width: 550px;
  max-height: 400px;
  margin-left: auto;
  margin-right: auto;
}
</style>

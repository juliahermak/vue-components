<template>
  <div class="card-ingredients d-flex">
    <input
      :ingredName="ingredName"
      @input="handleInputName"
      class="input-ingredient-name"
      placeholder="Інгредієнт"
    />
    <input
      :ingredNumber="ingredNumber"
      @input="handleInputNumber"
      class="input-ingredient-number"
      placeholder="Кількість"
    />

    <select
      :value="value"
      @change="handleInputUnit"
      v-model="selected"
      class="input-ingredient-select"
    >
      <option disabled value="">Міра виміру</option>
      <option>г</option>
      <option>кг</option>
      <option>л</option>
      <option>мл</option>
      <option>ст.ложк</option>
      <option>ч.ложк</option>
      <option>одиниць</option>
    </select>

    <v-btn
      color="#757575"
      class="ingredient-btn-minus"
      variant="text"
      icon="mdi-minus-box-outline"
      @click="removeIngredient"
    ></v-btn>
  </div>
</template>
<script>
export default {
  props: {
    ingredName: {
      type: String,
      required: true,
    },
    ingredNumber: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleInputName(event) {
      this.$emit("changeName", event.target.value, this.index);
    },
    handleInputNumber(event) {
      this.$emit("changeNumber", event.target.value, this.index);
    },
    handleInputUnit(event) {
      this.$emit("changeUnit", event.target.value, this.index);
    },
    removeIngredient() {
      this.$emit("delete");
    },
  },
  data: () => ({
    selected: "",
  }),
};
</script>
<style>
.input-ingredient-measurement {
  margin: 0px 16px;
  width: 150px;
}
.input-ingredient-select,
.input-ingredient-name,
.input-ingredient-number {
  color: rgb(131, 131, 131);
  margin: 8px 16px;
  padding: 8px;
  text-align: center;
  border: 1px solid;
  width: 140px;
  height: 56px;
  border-radius: 5px;
}
</style>

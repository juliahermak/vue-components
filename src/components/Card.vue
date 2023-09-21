<template>
  <div class="block-card">
    <v-card>
      <h2 class="card-title">Форма для запису рецепта</h2>

      <div class="card-photo">
        <Photo></Photo>
      </div>

      <div class="card-name-and-time">
        <input
          v-model="nameDish"
          class="input-name"
          placeholder="Назва страви"
        />
        <input
          v-model="timeDish"
          class="input-time"
          placeholder="Час приготування"
        />
      </div>
      <div class="card-btn-plus">
        <v-btn
          color="#757575"
          class="card-button-plus"
          variant="text"
          icon="mdi-plus-box-outline"
          @click="addIngredient"
        ></v-btn>
      </div>
      <Ingredient
        :value="ingredient.unit"
        @changeUnit="onChangeIngredientUnit"
        :ingredName="ingredient.name"
        @changeName="onChangeIngredientName"
        :ingredNumber="ingredient.amount"
        @changeNumber="onChangeIngredientNumber"
        v-for="(ingredient, index) of ingredients"
        :key="ingredient.id"
        :index="index"
        @delete="onDeleteIngredient(index)"
      ></Ingredient>
      <div class="card-description">
        <v-textarea
          v-model="textarea"
          class="description"
          label="Поради в приготуванні"
          prepend-icon="mdi-chef-hat"
          variant="outlined"
        ></v-textarea>
      </div>
      <v-btn @click="onclick" block class="mt-2">Опублікувати</v-btn>
    </v-card>
  </div>
</template>
<script>
import Photo from "@/components/PhotoInput.vue";
import Ingredient from "@/components/Ingredient.vue";

export default {
  data: () => ({
    nameDish: "",
    timeDish: "",
    textarea: "",
    ingredients: [
      {
        id: Date.now(),
        name: "",
        amount: "",
        unit: "",
      },
    ],
  }),

  methods: {
    onclick() {
      let click = {
        dishName: this.nameDish,
        dishTime: this.timeDish,
        ingred: this.ingredients,
        instruction: this.textarea,
      };
      console.log(click);
    },
    onChangeIngredientName(v, index) {
      this.ingredients[index].name = v;
    },
    onChangeIngredientNumber(v, index) {
      this.ingredients[index].amount = v;
    },
    onChangeIngredientUnit(v, index) {
      this.ingredients[index].unit = v;
    },
    addIngredient() {
      this.ingredients.push({
        id: Date.now(),
        name: "",
        amount: "",
        unit: "",
      });
    },
    onDeleteIngredient(index) {
      this.ingredients.splice(index, 1);
    },
  },

  components: {
    Ingredient,
    Photo,
  },
};
</script>
<style>
.description {
  margin: 32px;
}
.card-description {
  border-top: 1px solid rgb(215, 214, 214);
  margin: 16px 0px;
}
.card-btn-plus {
  border-top: 1px solid rgb(215, 214, 214);
}
.card-button-plus {
  margin-left: 550px;
}

.block-card {
  width: 600px;
  margin: 16px auto;
}
.card-title {
  text-align: center;
}
.card-photo,
.card-name-and-time {
  margin: 16px;
}

.input-name,
.input-time {
  margin: 0px 16px;
  padding: 8px;
  text-align: center;
  border: 1px solid;
  width: 170px;
  height: 56px;
  border-radius: 5px;
}

.input-name {
  width: 330px;
}
</style>

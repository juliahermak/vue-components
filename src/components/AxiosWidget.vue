<template>
  <div>
    <div class="block block_width block_color block__margin">
      <v-card variant="outlined">
        <div class="d-flex block__header">
          <div class="block__header_margin-left-part">
            <h2>Погода</h2>
            <h3 class="block__header_color-city">Лісабон</h3>
          </div>
          <div>
            <IconsWeather
              v-if="weather"
              :width="100"
              :precipitation="weather.daily.precipitation_probability_max[0]"
            ></IconsWeather>
          </div>
          <div class="block__header_margin-right-part" v-if="weather">
            <h2>Сьогодні</h2>
            <h3 class="block__header_red-text">
              {{ weather.daily.temperature_2m_max[0] }}°C
            </h3>
            <h3 class="block__header_blue-text">
              {{ weather.daily.temperature_2m_min[0] }}°C
            </h3>
          </div>
        </div>
        <div class="block__body">
          <v-table theme="dark">
            <thead v-if="weather">
              <tr>
                <th></th>
                <th v-for="item in weather.daily.time">
                  {{ formatDateISOToWeekDay(item) }}
                </th>
              </tr>
            </thead>
            <tbody v-if="weather">
              <tr>
                <td align="center">Максимальна температура</td>
                <td
                  align="center"
                  v-for="item in weather.daily.temperature_2m_max"
                >
                  {{ item }}°C
                </td>
              </tr>
              <tr>
                <td align="center">Мінімальна температура</td>
                <td
                  align="center"
                  v-for="item in weather.daily.temperature_2m_min"
                >
                  {{ item }}°C
                </td>
              </tr>
              <tr>
                <td align="center">Ймовірність опадів</td>
                <td
                  align="center"
                  v-for="item in weather.daily.precipitation_probability_max"
                >
                  {{ item }}%
                </td>
              </tr>
              <tr>
                <td></td>
                <td
                  align="center"
                  v-for="item in weather.daily.precipitation_probability_max"
                >
                  <IconsWeather
                    :width="60"
                    v-if="weather"
                    :precipitation="item"
                  ></IconsWeather>
                </td>
              </tr>
            </tbody>
          </v-table>
        </div>
      </v-card>
    </div>
  </div>
</template>
<script>
import IconsWeather from "@/components/IconsWeather.vue";
import axios from "axios";
import { DateTime } from "luxon";

export default {
  mounted() {
    this.fetchWeather();
  },
  data: () => ({
    weather: null,
  }),
  components: {
    IconsWeather,
  },
  methods: {
    fetchWeather() {
      axios
        .get(
          "https://api.open-meteo.com/v1/forecast?latitude=38.7167&longitude=-9.1333&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=GMT"
        )
        .then((response) => {
          this.weather = response.data;
        });
    },
    formatDateISOToWeekDay(dateISO) {
      const date = DateTime.fromISO(dateISO).setLocale("ru").toFormat("cccc");

      return date;
    },
  },
};
</script>
<style scoped>
.block__margin {
  margin: 32px;
}
.block__header_red-text {
  color: rgb(178, 2, 2);
}
.block__header_blue-text {
  color: blue;
}
.block__header_color-city {
  color: rgb(16, 26, 154);
}
.block__header_margin-left-part {
  text-align: center;
  margin-left: 120px;
  margin-right: 300px;
  margin-bottom: 15px;
}
.block__header_margin-right-part {
  text-align: center;
  margin-left: 60px;
  margin-bottom: 10px;
}

.block_width {
  width: 900px;
}
.block_color {
  background-color: rgb(185, 208, 254);
}
.block__header {
  padding-top: 15px;
}
</style>

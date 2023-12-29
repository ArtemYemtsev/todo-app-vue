<script setup>
import useDate from "@/composables/useDate.js"
import useTime from "@/composables/useTime.js"
import { ref } from "vue";

const date = ref({
  date: "--",
  month: "--",
  year: "----"
});

const time = ref({
  hours: "--",
  minutes: "--",
  seconds: "--",
});

const getDate = () => {
  date.value = useDate();
}

const getTime = () => {
  time.value = useTime();
}

// getDate()
// getTime()

setInterval(getDate, 1000);
setInterval(getTime, 500);
</script>

<template>
  <section class="date-time">
    <div class="container">
      <div class="date-time__inner">
        <p>
          {{ `${date.date}.${date.month}.${date.year}` }}
        </p>
        <p>
          {{ `${time.hours}:${time.minutes}:${time.seconds}` }}
        </p>
      </div>
    </div>
  </section>
</template>
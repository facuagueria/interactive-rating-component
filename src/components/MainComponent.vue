<template>
  <main
    class="flex justify-center items-center w-screen h-screen bg-interactive-very-dark-blue"
  >
    <div
      class="bg-interactive-dark-blue w-full max-w-md p-10 rounded-3xl flex flex-col"
    >
      <div v-if="!isSubmitted" class="space-y-8">
        <div
          class="bg-gray-700 flex justify-center items-center w-12 h-12 rounded-3xl"
        >
          <img src="../assets/images/icon-star.svg" alt="" />
        </div>
        <div class="space-y-2">
          <h1 class="text-4xl text-interactive-white">How did we do?</h1>
          <p class="text-interactive-light-grey pr-5">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div class="flex flex-row space-x-8 justify-center">
          <button class="btn" @click="setRate(1)">1</button>
          <button class="btn" @click="setRate(2)">2</button>
          <button class="btn" @click="setRate(3)">3</button>
          <button class="btn" @click="setRate(4)">4</button>
          <button class="btn" @click="setRate(5)">5</button>
        </div>
        <div>
          <button class="btn-submit" @click="submitRate">Submit</button>
        </div>
      </div>
      <div v-else class="space-y-8 flex justify-center items-center flex-col">
        <div>
          <img src="../assets/images/illustration-thank-you.svg" alt="" />
        </div>
        <div class="bg-gray-700 rounded-3xl">
          <span
            class="text-interactive-primary-orange flex items-center px-6 py-2"
          >
            You selected {{ myRate }} out of 5
          </span>
        </div>
        <div class="space-y-2 text-center">
          <h1 class="text-interactive-white text-3xl">Thank You!</h1>
          <p class="text-interactive-light-grey">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate you get in touch!
          </p>
        </div>
      </div>
    </div>
  </main>
  ======= $END$ >>>>>>> origin/main
</template>

<script>
export default {
  name: "MainComponent",
  data() {
    return {
      myRate: null,
      isSubmitted: false,
    };
  },
  methods: {
    setRate(value) {
      this.myRate = value;
    },
    submitRate() {
      this.isSubmitted = true;
    },
  },
};
</script>

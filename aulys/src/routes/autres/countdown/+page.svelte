<script>
  import { onMount, onDestroy } from "svelte";

  // Set the target date and time
  const targetDate = new Date("April 15, 2024 06:00:00");

  // Function to calculate the remaining time
  function calculateRemainingTime() {
    const now = new Date();
    const timeDifference = targetDate.getTime() - now.getTime();

    // Calculate the remaining days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  let countdown = calculateRemainingTime();

  // Update the countdown every second
  const interval = setInterval(() => {
    countdown = calculateRemainingTime();
  }, 1000);

  onMount(() => {
    // Clear the interval when the component is destroyed
    onDestroy(() => {
      clearInterval(interval);
    });
  });
</script>

<div class="min-h-svh p-0 prose max-w-none">
  <h1 class="text-5xl font-bold mt-32 text-center">Concours</h1>

  <div class="divider mx-10">
    <i class="fa-solid fa-minus text-3xl text-primary"></i>
  </div>

  <div class="lg:text-xl w-max mr-auto ml-auto mt-32">
    <div
      id="countdownx"
      class="grid grid-flow-col gap-5 text-center auto-cols-max"
    >
      <div class="flex flex-col">
        <span
          class="countdown p-2 bg-neutral rounded-box font-mono text-neutral-content text-5xl lg:text-7xl"
        >
          <span style="--value:{countdown.days};"></span>
        </span>
        Jours
      </div>
      <div class="flex flex-col">
        <span
          class="countdown p-2 bg-neutral rounded-box font-mono text-neutral-content text-5xl lg:text-7xl"
        >
          <span style="--value:{countdown.hours};"></span>
        </span>
        Heures
      </div>
      <div class="flex flex-col">
        <span
          class="countdown p-2 bg-neutral rounded-box font-mono text-neutral-content text-5xl lg:text-7xl"
        >
          <span style="--value:{countdown.minutes};"></span>
        </span>
        Min
      </div>
      <div class="flex flex-col">
        <span
          class="countdown p-2 bg-neutral rounded-box font-mono text-neutral-content text-5xl lg:text-7xl"
        >
          <span style="--value:{countdown.seconds};"></span>
        </span>
        Sec
      </div>
    </div>
  </div>
</div>

<script lang="ts">
  import type { Day } from "$lib/types";
  import { onMount } from "svelte";

  const days: Day[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  export let selectedDay = days[new Date().getDay()];

  function setBgPos(node: HTMLButtonElement) {
    const movingBg = document.querySelector<HTMLDivElement>("#shadow-div")!;
    movingBg.style.width = `${node.clientWidth}px`;
    movingBg.style.height = `${node.clientHeight}px`;
    movingBg.style.left = `${node.offsetLeft}px`;
    movingBg.style.top = `${node.offsetTop}px`;
  }

  function handleClick(day: Day) {
    return function (this: HTMLButtonElement) {
      selectedDay = day;
      setBgPos(this);
    };
  }

  onMount(() => {
    const activeDayElem = document.getElementById(
      "active-true"
    )! as HTMLButtonElement;
    setBgPos(activeDayElem);
    // scroll left by the offsetLeft of the element + 20px (which is the current padding)
    activeDayElem.parentElement?.scrollBy({
      left: activeDayElem.offsetLeft - 20,
    });
  });
</script>

<div class="mb-6">
  <div
    class="illegal-scroll relative flex max-w-full overflow-x-auto text-neutral-500
    scrollbar:h-0.8
    scrollbar-track:(rounded-2.5 bg-neutral-200/4)
    scrollbar-thumb:(rounded-2.5 bg-neutral-200/40)"
    p="b-4 x-5"
  >
    <div
      class="absolute top-0 left-0 bg-neutral-900 transition-all-250 rounded-full"
      id="shadow-div"
    />

    {#each days as day}
      <button
        class="relative z-1 px-4 py-2 rounded-full transition-all-250
        [&#active-true]:(text-white)"
        id="active-{selectedDay == day}"
        on:click={handleClick(day)}
      >
        {day}
      </button>
    {/each}
  </div>
</div>

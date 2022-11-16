<script lang="ts">
  import ScheduleCard from "./ScheduleCard.svelte";
  import DaySelector from "./DaySelector.svelte";
  import type { Course, Day } from "$lib/types";

  const courses: Course[] = [
    {
      startTime: 10,
      endTime: 12,
      moduleName: "Org. of Programming Languages",
      moduleCode: "COM321",
      lecturer: "Gilbert George Dauda",
      venue: "Block D",
      day: "Mon",
    },
    {
      startTime: 10,
      endTime: 12,
      moduleName: "Org. of Programming Languages",
      moduleCode: "COM321",
      lecturer: "Gilbert George Dauda",
      venue: "Network Lab (Block D)",
      day: "Mon",
    },
    {
      startTime: 14,
      endTime: 18,
      moduleName: "Distributed Computing",
      moduleCode: "COM291",
      lecturer: "Gilbert George Dauda",
      venue: "D74",
      day: "Tue",
    },
  ];

  let selectedDay: Day;

  // gets all days for the current day without the `day` property
  $: currentDay = courses
    .filter(c => c.day == selectedDay)
    .map(c => {
      // without a deep copy the `day` field on the original `courses` object is deleted
      const deepCopy = JSON.parse(JSON.stringify(c));
      delete deepCopy.day;
      return deepCopy;
    });
</script>

<h1 class="page-heading mb-6 text-2xl">Timetable</h1>

<DaySelector bind:selectedDay />

<section class="px-5 pb-10">
  {#each currentDay as course}
    <ScheduleCard {...course} />
  {:else}
    <h3>Great, you've got no lectures today</h3>
  {/each}
</section>

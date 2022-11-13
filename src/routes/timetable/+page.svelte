<script lang="ts">
  import type { Day } from "$lib/types";
  import ScheduleCard from "./ScheduleCard.svelte";
  import SelectDays from "./SelectDays.svelte";

  type Course = {
    startTime: number;
    endTime: number;
    moduleName: string;
    moduleCode: string;
    lecturer: string;
    venue: string;
    day: Day;
  };

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
</script>

<h1 class="page-heading mb-6 text-2xl">Timetable</h1>

<SelectDays bind:selectedDay />

<section class="px-5 pb-10">
  {#each courses as course}
    <ScheduleCard {...course} />
  {/each}
</section>

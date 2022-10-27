<script lang="ts">
  type Course = {
    startTime: number;
    endTime: number;
    moduleName: string;
    moduleCode: string;
    venue: string;
  };

  const courses: Course[] = [
    {
      startTime: 10,
      endTime: 12,
      moduleName: "Org. of Programming Languages",
      moduleCode: "COM321",
      venue: "Block D",
    },
    {
      startTime: 10,
      endTime: 12,
      moduleName: "Org. of Programming Languages",
      moduleCode: "COM321",
      venue: "Network Lab (Block D)",
    },
    {
      startTime: 14,
      endTime: 18,
      moduleName: "Distributed Computing",
      moduleCode: "COM291",
      venue: "D74",
    },
  ];
</script>

<h1 class="page-heading mb-6 text-2xl">Timetable</h1>

<un:px-5>
  {#each courses as { startTime, endTime, moduleName, moduleCode, venue }}
    <div
      class="shadow-(2xl base-content/2) border-(1 primary/10) mb-4 p-x-6 py-4 relative rounded-2xl font-semibold tracking-tight text-(sm gray-8) [&_>*]:leading-relaxed"
    >
      <h4 class="text-base-content-muted">{moduleCode}</h4>
      <h2 text-4>{moduleName}</h2>
      <h4 text="base-content/80">
        {startTime}:00 {startTime >= 12 ? "PM" : "AM"} - {endTime}:00 {endTime >= 12 ? "PM" : "AM"}
      </h4>
      <h4 text="base-content/70" uppercase>
        {venue}
      </h4>
    </div>
  {/each}
</un:px-5>

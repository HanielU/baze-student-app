<script lang="ts">
  import { testSprinkles } from "$styles/sprinkles.css";
  import ModuleDetailCard from "./ModuleDetailCard.svelte";
  import PerformanceGraph from "./PerformanceGraph.svelte";
  import StudentDetails from "./StudentDetails.svelte";

  type ModuleDetails = {
    label: string;
    value: string | number;
  };
  const moduleDetails: ModuleDetails[] = [
    {
      label: "Total Registered",
      value: 55
    },
    {
      label: "Total Passed",
      value: 54
    },
    {
      label: "Failed",
      value: 0
    },
    {
      label: "Currently Taking",
      value: 4
    }
  ];

  const sectionHeading = /*tw*/ "px-5 text-sm font-semibold uppercase mb-2.5";
  const sectionWrapper = /*tw*/ "mb-12";
</script>

<div class={testSprinkles}>This is test</div>

<h1 class="mb-10 px-5 font-secondary text-3xl font-semibold tracking-tight">Dashboard</h1>

<!-- Module Details -->
<section class={sectionWrapper}>
  <h3 class={sectionHeading}>Module Details</h3>

  <div class="illegal-scroll flex max-w-full gap-5 overflow-x-scroll px-5">
    {#each moduleDetails as { label, value }}
      <ModuleDetailCard {label} {value} />
    {/each}
  </div>
</section>

<!-- Student Details -->
<section class={sectionWrapper}>
  <h3 class={sectionHeading}>Student Details</h3>

  <div class="px-5">
    <StudentDetails />
  </div>
</section>

<!-- Student Performance Graph -->
<section class="pb-10">
  <h3 class={sectionHeading}>Student Performance</h3>

  <div class="px-5">
    <PerformanceGraph />
  </div>
</section>

<!-- :highlight: Using Pallete 8 -->

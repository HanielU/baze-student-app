<script lang="ts">
  import ModuleDetailCard from "./components/ModuleDetailCard.svelte";
  import StudentDetails from "./components/StudentDetails.svelte";
  import PerformanceGraph from "./components/PerformanceGraph.svelte";
  import { moduleDetails } from "$lib/dummydata/moduleDetails";

  const sectionHeading = "px-5 text-sm font-semibold uppercase mb-2.5";
</script>

<h1 class="page-heading">Dashboard</h1>

<!-- Module Details -->
<un:mb-7>
  <h3 class={sectionHeading}>Module Details</h3>

  <div class="illegal-scroll flex max-w-full gap-5 overflow-x-scroll" p="x-5 b-5">
    {#each moduleDetails as { label, value }}
      <ModuleDetailCard {label} {value} />
    {/each}
  </div>
</un:mb-7>

<!-- Student Details -->
<un:mb-12>
  <h3 class={sectionHeading}>Student Details</h3>

  <un:px-5>
    <StudentDetails />
  </un:px-5>
</un:mb-12>

<!-- Student Performance Graph -->
<un:pb-10>
  <h3 class={sectionHeading}>Student Performance</h3>

  <un:px-5>
    <!-- {#await import("./components/PerformanceGraph.svelte") then { default: PerformanceGraph }} -->
    <PerformanceGraph />
    <!-- {/await} -->
  </un:px-5>
</un:pb-10>

<!-- :highlight: Using Pallete 8 -->

<script lang="ts">
  import ModuleDetailCard from "./components/ModuleDetailCard.svelte";
  import StudentDetails from "./components/StudentDetails.svelte";
  import PerformanceGraph from "./components/PerformanceGraph.svelte";
  import { moduleDetails } from "$lib/dummydata/moduleDetails";

  const sectionHeading =
    "px-5 text-(sm neutral-800) font-semibold uppercase mb-2.5";
</script>

<h1 class="page-heading">Dashboard</h1>

<!-- Module Details -->
<section class="mb-7">
  <h3 class={sectionHeading}>Module Details</h3>

  <div
    class="illegal-scroll flex max-w-full gap-5 overflow-x-auto
    scrollbar:h-0.8
    scrollbar-track:(rounded-2.5 bg-neutral-200/4)
    scrollbar-thumb:(rounded-2.5 bg-neutral-200/40)"
    p="b-5 x-5"
  >
    {#each moduleDetails as { label, value }}
      <ModuleDetailCard {label} {value} />
    {/each}
  </div>
</section>

<!-- Student Details -->
<section class="mb-12">
  <h3 class={sectionHeading}>Student Details</h3>

  <section class="px-5">
    <StudentDetails />
  </section>
</section>

<!-- Student Performance Graph -->
<section class="pb-10">
  <h3 class={sectionHeading}>Student Performance</h3>

  <section class="px-5">
    <PerformanceGraph />
  </section>
</section>

<!-- :highlight: Using Pallete 8 -->

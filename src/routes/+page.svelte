<script lang="ts">
  import StudentDetails from "./components/StudentDetails.svelte";
  import PerformanceGraph from "./components/PerformanceGraph.svelte";
  import ModuleDetails from "./components/ModuleDetails.svelte";

  const sectionHeading = "px-5 text-(sm neutral-800) font-semibold uppercase mb-2.5";
</script>

<h1 class="page-heading">Dashboard</h1>

<!-- Module Details -->
<section class="mb-7">
  <h3 class={sectionHeading}>Module Details</h3>

  <ModuleDetails />
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

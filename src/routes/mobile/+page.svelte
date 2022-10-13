<script lang="ts">
  import { wrapper } from "./page.css";
  import ModuleDetailCard from "./ModuleDetailCard.svelte";

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
</script>

<h1 class="mb-8 px-5 font-secondary text-3xl font-semibold tracking-tight text-neutral-800">
  Dashboard
</h1>

<!-- module Details -->
<div>
  <h3 class="mb-2.5 px-5 font-secondary text-lg font-medium text-neutral-900">Module Details</h3>

  <div class={wrapper}>
    {#each moduleDetails as { label, value }}
      <ModuleDetailCard {label} {value} />
    {/each}
  </div>
</div>

<!-- :highlight: Using Pallete 8 -->

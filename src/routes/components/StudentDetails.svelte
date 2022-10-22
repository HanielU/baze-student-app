<script lang="ts">
  import { details } from "$lib/dummydata/studentInfo";
</script>

<!-- card -->
<section border="~ base-content/15" class="bg-base-100 rounded-xl">
  {#each details as { label, value }}
    <div
      border-b="[&:not(:last-child)]:~ base-content/15"
      class="flex-between p-5 text-base tracking-tight"
    >
      <p class="text-base-content/80">{label}</p>
      <p class="font-semibold">{value}</p>
    </div>
  {/each}
</section>

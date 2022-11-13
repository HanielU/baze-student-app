<script lang="ts">
  import { details } from "$lib/dummydata/studentInfo";
</script>

<!-- card -->
<section border="~ base-content/15" class="bg-base-100 rounded-xl">
  {#each details as { label, value }}
    <div
      border-b="[&:not(:last-child)]:~ base-content/15"
      class="s-flex-between flex-wrap gap-2 p-5 text-sm tracking-tight"
    >
      <p class="text-neutral-400 flex-1 grow-0.8">{label}</p>
      <p class="font-semibold text-neutral-900 text-end flex-1">{value}</p>
    </div>
  {/each}
</section>

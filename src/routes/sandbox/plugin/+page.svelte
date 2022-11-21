<script lang="ts">
  import { SmallestWidth } from "$plugins/smallest-width";
</script>

<div>
  {#await SmallestWidth.getSmallestWidth() then { value }}
    <h1>The smallest Width for this device is: {value}</h1>
  {/await}
</div>

<script lang="ts">
  // import clsx from "clsx";
  export let label: string;
  export let value: string | number;
  // const has = (text: string) => label.toLowerCase().includes(text);
</script>

<!-- card -->
<div border="~ base-content/10" class="illegal-scroll min-w-64 bg-base-100 rounded-xl p-5 shadow">
  <h4>{label}</h4>
  <h2 class="text-2xl font-bold">{value}</h2>
</div>

<!-- <div
  class={clsx(
    "illegal-scroll",
    "min-w-64 rounded-xl border bg-base-100 p-5",
    has("registered") && "bg-blue/50 border-blue-content/20 text-blue-content",
    has("passed") && "bg-green/50 border-green-content/20 text-green-content",
    has("failed") && "bg-red/50 border-red-content/20 text-red-content",
    has("taking") && "bg-brown/50 border-brown-content/20 text-brown-content"
  )}
>
  <h4>{label}</h4>
  <h2 class="text-2xl font-bold">{value}</h2>
</div> -->

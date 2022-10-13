<script lang="ts">
  import clsx from "clsx";
  export let label: string;
  export let value: string | number;
  const has = (text: string) => label.toLowerCase().includes(text);
</script>

<!-- card -->
<div
  class={clsx(
    "illegal-scroll",
    "min-w-64 flex-1 rounded-xl border border-solid bg-base-100 p-5 shadow-[0px_20px_50px_0px]",
    has("registered") && "bg-blue/90 border-blue-content/20 text-blue-content shadow-blue/50",
    has("passed") && "bg-green/90 border-green-content/20 text-green-content shadow-green/50",
    has("failed") && "bg-red/90 border-red-content/20 text-red-content shadow-red/50",
    has("taking") && "bg-brown/90 border-brown-content/20 text-brown-content shadow-brown/50"
  )}
>
  <h4>{label}</h4>
  <h2 class="text-2xl font-bold">{value}</h2>
</div>

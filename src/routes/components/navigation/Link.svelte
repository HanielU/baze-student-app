<script lang="ts">
  import { navigationStack } from "$lib/stores";

  let className = "";
  let to: string;
  let prefetch = true;
  export { className as class, to, prefetch };
</script>

<!-- 
  @component
  
  Prefetches links by default  
 -->

<a
  href={to}
  data-sveltekit-prefetch={prefetch ? "" : "off"}
  class={className}
  on:click={() => $navigationStack++}
>
  <slot />
</a>

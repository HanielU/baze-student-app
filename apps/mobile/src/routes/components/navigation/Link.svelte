<script lang="ts">
  import { navigationStack } from "$lib/stores";

  let className = "";
  let href: string;
  let prefetch = true;
  export { className as class, href, prefetch };
</script>

<!-- 
  @component
  
  Prefetches links by default  
 -->

<a
  {href}
  data-sveltekit-prefetch={prefetch ? "" : "off"}
  class={className}
  on:click={() => $navigationStack++}
>
  <slot />
</a>

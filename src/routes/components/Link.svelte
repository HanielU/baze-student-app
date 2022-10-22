<script lang="ts">
  import { navigationStack } from "$lib/stores";

  let className = "";
  let to: string;
  let prefetch = false;
  export { className as class, to, prefetch };
</script>

<a
  href={to}
  data-sveltekit-prefetch={prefetch}
  class={className}
  on:click={() => $navigationStack++}
>
  <slot />
</a>

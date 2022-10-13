<script>
  import { sidebarOpen } from "$lib/stores";
  import { menuBtn } from "./Header.css";

  let studentName = "Haniel Efe-Tobore Ubogu";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<nav
  class="sticky top-0 mb-8 flex w-full items-center justify-between border-b border-solid border-b-primary/20 bg-base-100 p-5"
>
  <!-- burger btn -->
  <div
    class="flex cursor-pointer items-center justify-center p-3.5"
    on:click={() => ($sidebarOpen = !$sidebarOpen)}
  >
    <div class={menuBtn} class:open={$sidebarOpen} />
  </div>

  <h3 class="text-base">{studentName}</h3>
</nav>

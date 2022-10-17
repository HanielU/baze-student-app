<script>
  import { sidebarOpen } from "$lib/stores";
  import { menuBtn } from "./Header.css";

  let studentName = "Haniel Efe-Tobore Ubogu";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<nav
  class="sticky top-0 mb-10 flex w-full items-center justify-between border-b border-solid border-b-primary/20 bg-base-100 px-5 py-4"
>
  <!-- burger btn -->
  <div
    class="flex h-12 w-12 cursor-pointer items-center justify-center rounded-md bg-white shadow-sm"
    on:click={() => ($sidebarOpen = !$sidebarOpen)}
  >
    <div class={menuBtn} class:open={$sidebarOpen} />
  </div>

  <h3 class="text-base">{studentName}</h3>
</nav>

<script>
  import { sidebarOpen } from "$lib/stores";
  import { menuBtn } from "./Header.css";

  let studentName = "Haniel Efe-Tobore Ubogu";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<nav border-b="~ primary/20" p="x-5 y-4" class="bg-base-100 flex-between sticky top-0 mb-10 w-full">
  <!-- burger btn -->
  <div
    class="flex-center bg-base-100 h-12 w-12 cursor-pointer rounded-md shadow-sm"
    on:click={() => ($sidebarOpen = !$sidebarOpen)}
  >
    <div class={menuBtn} class:open={$sidebarOpen} />
  </div>

  <h3 class="text-base">{studentName}</h3>
</nav>

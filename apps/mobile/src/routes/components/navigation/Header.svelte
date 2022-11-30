<script>
  import { sidebarOpen } from "$lib/stores";
  import { menuBtn } from "./Header.css";

  let studentName = "Haniel Efe-Tobore Ubogu";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<nav
  border-b="~ neutral-100"
  p="x-5 y-2"
  class="bg-base-100 s-flex-between sticky top-0 mb-8 w-full z-20"
>
  <!-- burger btn -->
  <div
    class="s-flex-center bg-white square-12 cursor-pointer rounded-md shadow-sm"
    on:click={() => ($sidebarOpen = !$sidebarOpen)}
  >
    <div class={menuBtn} class:open={$sidebarOpen} />
  </div>

  <h3 class="text-(sm neutral-600) uppercase">{studentName}</h3>
  <!-- <h3 class="text-sm">{window.innerWidth}</h3> -->
</nav>

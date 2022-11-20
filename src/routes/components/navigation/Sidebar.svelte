<script lang="ts">
  import Link from "./Link.svelte";
  import clsx from "clsx";
  import type { NavLink } from "$lib/types";
  import { page } from "$app/stores";
  import { sidebarOpen } from "$lib/stores";
  import { afterNavigate } from "$app/navigation";

  const links: NavLink[] = [
    {
      path: "/",
      name: "Home",
      classes: {},
    },
    {
      path: "/assessment",
      name: "Assessment",
      classes: {},
    },
    {
      path: "/registration",
      name: "Registration",
      classes: {},
    },
    {
      path: "/sandbox",
      name: "Sandbox",
      classes: {},
    },
  ];

  afterNavigate(() => ($sidebarOpen = false));
</script>

<!-- shadow-bg -->
<button
  class={clsx(
    "fixed top-0 left-0 h-screen w-full bg-black/30 z-999 transition-all-250",
    !$sidebarOpen && "pointer-events-none opacity-0"
  )}
  on:click={() => ($sidebarOpen = false)}
/>

<div
  class="fixed top-0 left-0 min-w-200px w-80% max-w-230px 
  [@media_screen_and_(min-width:400px)]:max-w-300px bg-white h-full z-9999
  -translate-x-full transition-all-250"
  class:translate-x-0={$sidebarOpen}
>
  <!-- Logo section -->
  <div class="h-18% s-flex-center b-b-(1 neutral-200) mb-8">
    <!-- TODO: Add some sort of logo here -->
    <div>
      <h1 class="text-neutral-800">Baze University</h1>
    </div>
  </div>

  <!-- nav links -->
  <nav>
    {#each links as { path, name, classes }}
      {@const currentPathActive = $page.url.pathname === path}

      <Link href={path}>
        <div class={clsx("p-2", currentPathActive && "")}>
          <!-- icon wrapper -->
          <div>
            <div class={clsx(currentPathActive ? classes.fill : classes.line)} />
          </div>

          <span class="block">
            {name}
          </span>
        </div>
      </Link>
    {/each}
  </nav>
</div>

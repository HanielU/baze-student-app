<script lang="ts">
  import Link from "./Link.svelte";
  import clsx from "clsx";
  import type { NavLink } from "$lib/types";
  import { page } from "$app/stores";

  export let footerHeight: number;

  const footerLinks: NavLink[] = [
    {
      path: "/",
      name: "Dashboard",
      classes: {
        fill: "i-ri-home-5-fill",
        line: "i-ri-home-5-line text-base-content",
      },
    },
    {
      path: "/timetable",
      name: "Timetable",
      classes: {
        fill: "i-ri-calendar-fill !text-lg",
        line: "i-ri-calendar-line text-base-content",
      },
    },
    {
      path: "/notifications",
      name: "Notifications",
      classes: {
        fill: "i-ri-notification-3-fill !text-lg",
        line: "i-ri-notification-3-line text-base-content",
        wrapper:
          "after:(content-empty absolute top-2px right-2px square-2 bg-orange-v-400 rounded-full)",
      },
    },
  ];

  // :fix: linkWidth is still incorrect on first render most times
  function getLinkWidth(ctx: HTMLDivElement) {
    const linkWidth = ctx.clientWidth;
    const linkWidthWithoutTextSpan = linkWidth - ctx.querySelector("span")!.clientWidth;

    ctx.style.setProperty("--linkWidth", `${linkWidth}px`);
    ctx.style.setProperty("--linkWOTS", `${linkWidthWithoutTextSpan}px`); // linkWOTS - link width without text span

    /* 
      This is neccessary because by the time the current ctx loads,
      the child elements may not have been fully rendered, causing
      the element's clientWidth to be incorrectly calculated.
    */
    function update() {
      const textSpan = ctx.querySelector("span")!;
      const textSpanWidth = textSpan.clientWidth;
      ctx.style.setProperty("--linkWidth", `${linkWidthWithoutTextSpan + textSpanWidth}px`);
    }
    setTimeout(update, 800);
  }
</script>

<!-- footer nav -->
<footer
  class="fixed bottom-2.5 left-0 w-full px-5 [@media_screen_and_(min-width:400px)]:px-8"
  bind:clientHeight={footerHeight}
>
  <nav
    class="bg-base-100 s-flex-between mx-auto border-(1 primary/10) shadow-(2xl base-content/20) rounded-5"
  >
    {#each footerLinks as { path, name, classes }}
      {@const currentPathActive = $page.url.pathname === path}

      <Link href={path} class="mx-auto block py-3">
        <div
          use:getLinkWidth
          class={clsx(
            "transition-all-250 px-4 py-3 s-flex-start-center text-white rounded-10",
            currentPathActive ? "bg-neutral-900 gap-1 w-[var(--linkWidth)]" : "w-[var(--linkWOTS)]"
          )}
        >
          <!-- icon wrapper -->
          <div class={clsx("flex relative", !currentPathActive && classes.wrapper)}>
            <div
              class={clsx(
                "transition-all-250 text-xl relative",
                currentPathActive ? classes.fill : classes.line
              )}
            />
          </div>

          <!-- page link name -->
          <span
            class="block text-xs opacity-0 transition-250 ease-[ease-out]"
            class:opacity-100={currentPathActive}
          >
            {name}
          </span>
        </div>
      </Link>
    {/each}
  </nav>
</footer>

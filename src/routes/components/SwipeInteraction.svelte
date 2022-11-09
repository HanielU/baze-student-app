<script lang="ts">
  import { sidebarOpen } from "$lib/stores";

  let dragging = false;
  let startX = 0;
  let startY = 0;
  let currentX = 0;
  let currentY = 0;

  /** Value in pixels */
  let movedXBy = 0;
  /** Value in pixels */
  let movedYBy = 0;

  function getCurrentPos(e: Event) {
    return e.type.includes("mouse") ? (e as MouseEvent) : (e as TouchEvent)?.touches?.[0];
  }

  function startDrag(e: MouseEvent | TouchEvent) {
    const target = e.target as HTMLElement;
    if (target.parentElement?.classList.contains("illegal-scroll")) return;

    dragging = true;
    ({ clientX: startX, clientY: startY } = getCurrentPos(e));
  }

  function handleDrag(e: MouseEvent | TouchEvent) {
    if (!dragging) return;
    document.documentElement.style.userSelect = "none";
    ({ clientX: currentX, clientY: currentY } = getCurrentPos(e));
  }

  function stopDrag() {
    dragging = false;
    document.documentElement.style.userSelect = "initial";

    movedXBy = currentX - startX;
    movedYBy = currentY - startY;

    // console.log({ movedXBy, movedYBy });

    // makes sure the screen has actually been swiped through
    // if screen has been swiped through then currentX and currentY
    // will be something other than 0
    if (currentX !== 0 && currentY !== 0) {
      if (movedXBy >= 80 && movedYBy >= -60 && movedYBy <= 60 && !$sidebarOpen) {
        $sidebarOpen = true;
      } else if (movedXBy <= -80 && $sidebarOpen) {
        $sidebarOpen = false;
      }
    }

    currentX = startX = currentY = startY = 0;
  }
</script>

<svelte:window on:touchstart={startDrag} on:touchmove={handleDrag} on:touchend={stopDrag} />

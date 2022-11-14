<script lang="ts">
  import type { Day } from "$lib/types";

  export let moduleCode: string;
  export let moduleName: string;
  export let startTime: number;
  export let endTime: number;
  export let venue: string;
  export let lecturer: string;
  export let day: Day;
</script>

<div
  class="
  relative bg-base-100 p-(x-5 y-4) rounded-2xl mb-3 
  shadow tracking-tight [&_*]:leading-relaxed"
>
  <!-- header -->
  <div
    class="
    s-flex-between-baseline text-(sm neutral-600) pb-1.8 
    mb-1.8 border-b-(1 base-content/30)"
  >
    <h3 class="">{moduleCode}</h3>

    <div class="s-flex-center gap-0.5">
      <div>
        <div class="i-ri-time-line" />
      </div>

      <div>
        {startTime}:00 - {endTime}:00
      </div>
    </div>
  </div>

  <div>
    <h1 class="fw-semibold mb-2 text-neutral-900">{moduleName}</h1>

    <!-- lecturer -->
    <div class="s-flex-start gap-1 text-(sm neutral-400) font-secondary">
      <!-- icon wrapper -->
      <div>
        <div class="i-ri-user-3-line" />
      </div>

      <p>{lecturer}</p>
    </div>

    <!-- venue -->
    <div class="s-flex-start gap-1 text-(sm base-content-muted) font-secondary">
      <!-- icon wrapper -->
      <div>
        <div class="i-ri-building-2-line" />
      </div>
      <p>{venue}</p>
    </div>
  </div>
</div>

<!-- <div
  class="shadow-(2xl base-content/2) border-(1 primary/10) mb-4 p-x-6 py-4 relative rounded-2xl font-semibold tracking-tight text-(sm gray-8) [&_>*]:leading-relaxed"
>
  <h4 class="text-base-content-muted">{moduleCode}</h4>
  <h2 text-4>{moduleName}</h2>
  <h4 text="base-content/80">
    {startTime}:00 {startTime >= 12 ? "PM" : "AM"} - {endTime}:00 {endTime >= 12
      ? "PM"
      : "AM"}
  </h4>
  <h4 text="base-content/70 uppercase">
    {venue}
  </h4>
</div> -->

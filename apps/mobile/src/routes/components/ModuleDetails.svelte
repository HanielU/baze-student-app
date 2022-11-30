<script lang="ts">
  import { moduleDetails } from "$lib/dummydata/moduleDetails";
</script>

<div
  class="
    p-(b-5 x-5) max-w-full gap-5 overflow-x-auto
    scrollbar:h-0.8
    scrollbar-track:(rounded-2.5 bg-neutral-200/4)
    scrollbar-thumb:(rounded-2.5 bg-neutral-200/40)"
>
  <div class="illegal-scroll s-flex-center bg-white rounded-xl shadow min-w-min">
    <div class="s-flex-evenly-baseline w-full">
      {#each moduleDetails as { label, value }}
        <div
          class=":uno:
          relative text-center flex-1 p-4
          s-flex-center flex-col pointer-events-none
          [&:not(:last-child)]:(pr-4 after:(
            content-empty absolute h-40% w-1px top-50%
            -translate-y-50% rounded-full right-0 bg-neutral-100
          ))"
        >
          <h3 class="leading-2rem text-(5.5 neutral-800) font-bold">
            {value}
          </h3>
          <div class="text-(sm neutral-500) min-w-10ch">{label}</div>
        </div>
      {/each}
    </div>
  </div>
</div>

<!-- <div
  class="illegal-scroll flex max-w-full gap-5 overflow-x-auto
    scrollbar:h-0.8
    scrollbar-track:(rounded-2.5 bg-neutral-200/4)
    scrollbar-thumb:(rounded-2.5 bg-neutral-200/40)"
  p="b-5 x-5"
>
  {#each moduleDetails as { label, value }}
    <div border="~ neutral-100" class="illegal-scroll min-w-46 bg-base-100 rounded-xl p-5 shadow">
      <h4 class="text-(sm neutral-500)">{label}</h4>
      <h2 class="text-(2xl neutral-800) font-bold">{value}</h2>
    </div>
  {/each}
</div> -->

<!-- <div
  class={clsx(
    "illegal-scroll",
    "min-w-64 rounded-xl border bg-base-100 p-5",
    has("registered") && "bg-blue/50 border-blue-content/20 text-blue-content",
    has("passed") && "bg-green/50 border-green-content/20 text-green-content",
    has("failed") && "bg-red/50 border-red-content/20 text-red-content",
    has("taking") && "bg-brown/50 border-brown-content/20 text-brown-content"
  )}
>
  <h4>{label}</h4>
  <h2 class="text-2xl font-bold">{value}</h2>
</div> -->

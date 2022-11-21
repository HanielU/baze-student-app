<script lang="ts">
  const links = [
    ["/sandbox", "Home"],
    ["/sandbox/plugin", "Plugin"],
  ];
</script>

<header>
  <div class="flex bg-neutral-900 text-white">
    {#each links as [path, name]}
      <a class="p-2" href={path}>{name}</a>
    {/each}
  </div>
</header>

<slot />

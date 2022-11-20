<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { ScreenOrientation } from "$plugins/screen-orientation";

  let orientation = "";

  onMount(() => {
    ScreenOrientation.addListener("screenOrientationChange", res => (orientation = res.type));
    ScreenOrientation.orientation().then(res => (orientation = res.type));
  });

  onDestroy(() => {
    ScreenOrientation.removeAllListeners();
  });

  function lockLandscape() {
    ScreenOrientation.lock({ orientation: "landscape-primary" });
  }

  function unlock() {
    ScreenOrientation.unlock();
  }

  const btn = "bg-purple text-white p-2 rounded-xl";
</script>

<div>
  <nav>
    <h1>Delivery Confirmation (orientation: {orientation})</h1>
  </nav>

  <!-- content -->
  {#if orientation.includes("portrait")}
    <div class="incorrect-orientation ">
      <p>Please turn the device to landscape mode to sign for your delivery.</p>
      <button class={btn} on:click={lockLandscape}>
        <!-- <IonIcon icon={phoneLandscape} /> -->
        Rotate My Device
      </button>
    </div>
  {:else if orientation.includes("landscape")}
    <div class="ion-padding esign">
      <span>Please sign to confirm your delivery:</span>
      <div class="esign-pad" />
      <button class={btn} expand="full" on:click={unlock}>
        <!-- <IonIcon icon={checkmarkCircle} /> -->
        Confirm Signature
      </button>
    </div>
  {/if}
</div>

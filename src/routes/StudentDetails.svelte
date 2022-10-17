<script lang="ts">
  import { page } from "$app/stores";

  const details = [
    {
      label: "Student ID",
      value: "BU/19C/IT/3944"
    },
    {
      label: "Student Names",
      value: "Haniel Efe-Tobore Ubogu"
    },
    {
      label: "Current Program",
      value: "Software Engineering"
    },
    {
      label: "Student Satus",
      value: "Active"
    },
    {
      label: "Student Level",
      value: "400"
    },
    {
      label: "Student Semester",
      value: "Second"
    }
  ];
</script>

<!-- card -->
<section class="rounded-xl border border-solid border-base-content/20 bg-white">
  {#each details as { label, value }}
    <div
      class="flex items-center justify-between border-solid border-b-base-content/20 p-5 text-base tracking-tight [&:not(:last-child)]:border-b"
    >
      <p class="text-base-content/80">{label}</p>
      <p class="font-semibold">{value}</p>
    </div>
  {/each}
</section>

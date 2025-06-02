<script lang="ts">
    import type {PageProps} from './$types';
	  import Linkbotton from './Linkbotton.svelte';

    let {data}: PageProps = $props();
</script>

<div class="bg-white dark:bg-black rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
    <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Digimon info</h3>
</div>

<div class="bg-white dark:bg-black rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 grid grid-flow-col grid-rows-3 gap-4">
  {#each data.digimons.content as digimon}
    <div>
      <div class ="flex gap-2">
        <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
          ID: {digimon.id}
        </p>
        <div class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
          Name:
          <a href={digimon.href}>
            {digimon.name}
          </a>
        </div>
      </div>

      <img src={digimon.image} alt={digimon.name}>
    </div>
  {/each}
</div>

<Linkbotton link="?page={Number(data.current)-1}" >
  &laquo; Previous
</Linkbotton>

<Linkbotton link="?page={Number(data.current)+1}" pixelX= "px-8">
  Next &raquo;
</Linkbotton>

    
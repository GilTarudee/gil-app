<script lang="ts">
    import Button from '$lib/iu/Button.svelte';
    import type {PageProps} from './$types';
	  import { calculator } from './calculator_PBenz/solve_eq_ty';
    // import Box from '$lib/iu/Box.svelte';


    let {data}: PageProps = $props();
</script>

<div class= "bg-sky-100 h-full w-full">

  <div class="h-65 grid place-content-center">
    
    <h1 class="text-xl m-3 font-bold ">
      My Applications
    </h1>
    
    <Button class="shadow-lg shadow-sky-700/50 hover:bg-sky-700 text-center m-2 font-bold" href="/calculator_PBenz" id="calculator_app">
      Calculator
    </Button>
    
    <Button class="shadow-lg shadow-sky-700/50 hover:bg-sky-700 text-center m-2 font-bold" href="/todolist" id="To do lists app">
      To do lists
    </Button>

    <Button class="shadow-lg shadow-sky-700/50 hover:bg-sky-700 text-center m-2 font-bold " href="/digimon" id="To do lists app">
      Digimon Info
    </Button>
  
  </div>

  <div class="text-gray-600 py-3 px-3 font-bold grid place-items-end">
  Wait for new apps..
  </div>

</div>


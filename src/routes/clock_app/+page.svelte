<script lang="ts">
    import Button from '$lib/iu/Button.svelte';
    import type { PageProps } from './$types';
	
    import Clock from './Clock.svelte';
	import ClockSec from './ClockSEC.svelte';
    import Date from './Date.svelte';
    import { onMount } from 'svelte';
  
    let { data }: PageProps = $props();
  
    let images: string[] = [
      '/images/cinnamon1.png',
      '/images/cinnamon2.png',
      '/images/cinnamon3.png'
    ];
  
    let currentIndex = $state(0);
    let currentImage = $derived(() => images[currentIndex]);
  
    onMount(() => {
    const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;

    }, 2000);

    return () => clearInterval(interval);
    });

    let showSec: boolean = $state(true);
    function toggleSec() {
        showSec = !showSec;
}

</script>

<div class="bg-slate-700 w-[400px] h-[500px] flex items-center justify-center rounded-[40px]">
    <div class="bg-cyan-200 w-[380px] h-[480px] rounded-[40px]">  
        
        <img 
        src={currentImage()} 
        alt="cinna1" 
        width="400" 
        class="absolute" />
        <h1 class="font-pixel text-5xl text-center leading-[3]">
        <Date />
        </h1>

    {#if showSec}
        <h2 class="font-pixel text-8xl text-center ">
            <Clock />
        </h2> 
    {:else}
        <h2 class="font-pixel text-6xl text-center leading-[2]">
            <ClockSec />
        </h2> 
    {/if}

    </div>
</div>

<div class="flex w-[380px] justify-end ">
<Button onclick={() => toggleSec()} class="m-2 p-2 font-pixel text-3xl text-center">
    SEC
</Button>
</div>

  


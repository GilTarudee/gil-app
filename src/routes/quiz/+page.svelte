<script lang="ts">
    import Button from '$lib/iu/Button.svelte';
    import type {PageProps} from './$types';

    let {data}: PageProps = $props();
</script>

<div class= "bg-sky-100 h-full w-full">

  <div class="h-65 grid place-content-center">
    
    <h1 class="text-xl m-3 font-bold">
      โปเกมอนคู่หูที่เหมาะกับคุณ!!
    </h1>

    <h1 class="text-l m-3 text-center text-gray-500">
        กรุณาใส่ชื่อของคุณ
    </h1>
    <input class="mx-1 bg-slate-100 w-full rounded-md border border-slate-500">
       
    
    <Button class="text-l shadow-lg shadow-sky-700/50 hover:bg-sky-700 text-center m-2 font-bold" href="/quiz/quiz1" id="start">
      เริ่ม!!
    </Button>
    


</div>


</div>


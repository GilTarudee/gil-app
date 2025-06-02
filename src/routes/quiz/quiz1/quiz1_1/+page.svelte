<script lang="ts">
    import Button from '$lib/iu/Button.svelte';
    import type {PageProps} from './$types';

    let {data}: PageProps = $props();
</script>

<div class= "bg-sky-100 h-full w-full">

  <div class="h-65 grid place-content-center">
    
    <h1 class="text-xl m-3 font-bold">
        ถ้าคุณรู้สึกน้อยใจ คุณจะ...
    </h1>

    
    <Button class="shadow-lg shadow-sky-700/50 hover:bg-sky-700 text-center m-2 font-bold" href="/quiz/quiz1/quiz1_1/Chikorita" id="start">
        งอน
    </Button>
    <Button class="shadow-lg shadow-sky-700/50 hover:bg-sky-700 text-center m-2 font-bold" href="/" id="start">
        ...
    </Button>
    <Button class="shadow-lg shadow-sky-700/50 hover:bg-sky-700 text-center m-2 font-bold" href="/" id="start">
        ...
    </Button>
    


</div>
<div class="grid place-content-end">
<Button class="shadow-lg shadow-gray-700/50 hover:bg-gray-700 text-center m-2 font-bold" href="/quiz/quiz1" >
    Return
</Button>
</div>
</div>


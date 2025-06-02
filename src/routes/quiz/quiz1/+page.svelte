<script lang="ts">
    import Button from '$lib/iu/Button.svelte';
    import type {PageProps} from './$types';

    let {data}: PageProps = $props();
</script>

<div class= "bg-sky-100 h-full w-full">

  <div class="h-65 grid place-content-center">
    
    <h1 class="text-xl m-3 text-center ">
        คุณมักจะเริ่มวันใหม่อย่างไร?
    </h1>

    
    <Button class="text-l shadow-lg shadow-sky-700/50 hover:bg-sky-700 text-center m-2 " href="/quiz/quiz1/quiz1_1" id="start">
        ออกกำลังกายและเตรียมตัวให้พร้อมสำหรับวันใหม่
    </Button>
    <Button class="text-l shadow-lg shadow-sky-700/50 hover:bg-sky-700 text-center m-2" href="/" id="start">
        คิดแผนการที่ดีที่สุดและเตรียมความพร้อม
    </Button>
    <Button class="text-l shadow-lg shadow-sky-700/50 hover:bg-sky-700 text-center m-2" href="/" id="start">
        ค้นหาความสนุกและแรงบันดาลใจใหม่ๆ
    </Button>
    <Button class="text-l shadow-lg shadow-sky-700/50 hover:bg-sky-700 text-center m-2" href="/" id="start">
        ผ่อนคลายและคิดถึงสิ่งที่สำคัญในวันนั้น
    </Button>
    


</div>

</div>


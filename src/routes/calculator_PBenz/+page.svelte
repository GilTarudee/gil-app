<script lang="ts">
    import { onclick_fn } from './utils';
    import { solve_equation } from './solve_eq_ty';
	import Button from "$lib/iu/Button.svelte";

    let result ='0';
</script>
<div>
<h1 class="font-bold text-xl my-1"
>Calculator
</h1>

<div class="mb-3 border-3 border-gray-500 rounded-md bg-sky-200 w-[210px] h-[310px] flex flex-col gap-2 p-3">
    <div class="h-[100px] w-[180px] bg-white p-3 rounded-md flex justify-end items-center text-5xl" data-testid="display">
        <!-- ทำช่องที่ show เลข jussified ให้เลข 0 อยู่ทางขวา -->
        <!-- data-testid="display" ทำให้เช็คค่าใน test -->
         <!-- p => pad ตัวอักษร 
            flex justify-end => ตัวอักษรอยู่ขวา end 
            items-center => ให้ตัวอักษร อยู่กลางนับจากแนวตั้ง 
            text-7xl => ขนาดตัวอักษร-->
        {result}
    </div>
    <div class=' flex flex-row gap-1'>
        <div class='grid grid-cols-3 grid-rows-3 gap-1'>
            {#each ['1','2','3','4', '5', '6', '7', '8', '9', 'C', '0', '='] as button}
            <Button
                class='h-[42px] w-[42px]'
                onclick={()=>{
                    if (button === 'C'){
                        result = '0';
                        return;
                    }
                    if (button === '='){
                        result = solve_equation(result);
                        return;                    
                    }
                    
                result = onclick_fn(button,result);
            }}
            >
                {button}
            </Button>
            {/each}
        </div>

        <div class='flex flex-col gap-1'>
            {#each ['+','-','*','/'] as button}
                <Button 
                class='h-[42px] w-[42px]'
                onclick={()=>{
                    result = onclick_fn(button, result);
                }}
                >
                    {button}
                </Button>
            {/each}
        </div>
    </div>
</div>
<div class="mx-35">
<Button class=" shadow-lg shadow-slate-200/50 bg-slate-500 font-bold p-2 px-3" href="/" id="Menu page">
    Menu
</Button>
</div>
</div>


<!-- 
<h1>Calculator</h1>
<div class="h-[600px] w-[400px] border bg-gray-300">
    <div class="h-[100px] w-[350px] bg-white">
        {result}
    </div>

    <button
        class="h-[50px] w-[50px] border border-red-500 
        bg-gray-600"
        onclick={() => {
            result = onclick_fn('1',result);
        }}
    >
        1
    </button>
    <button
        class="h-[50px] w-[50px] border border-red-500 bg-gray-600"
        onclick={() => {
            result = onclick_fn('2', result);
        }}
    >
        2
    </button>
    <button
        class="h-[50px] w-[50px] border border-red-500 bg-gray-600"
        onclick={() => {
            result = onclick_fn('+', result);
        }}
    >
        +
    </button>
    <button class="h-[50px] w-[50px] border border-red-500 bg-gray-600" onclick={resolve_calculation}>
        =
    </button>
</div> -->
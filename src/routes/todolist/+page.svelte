<script lang="ts">
    import Button from "$lib/iu/Button.svelte";
	import type { PageData } from "./$types";

    import { superForm } from 'sveltekit-superforms';
    import SuperDebug from 'sveltekit-superforms';

    // ทำให้รู้ type ของตัวที่มาจาก server
    let {data} : {data:PageData} = $props();
    let todos = $state(data.todos);
    let new_todo = $state('');
    let time = $state('');

    const { form, errors, constraints, message, enhance} = superForm(data.form);

function add_todo() {}

function remove_todo(todo_id: string){}
</script>

<div class= "bg-sky-100 h-full w-full">
<h1 class="font-bold text-3xl my-3 text-center"
>To do lists
</h1>

<ul class='flex flex-col gap-2 my-2'>
    {#each todos as element,i}
        <div class="grid grid-cols-8 gap-2">
            <form method="POST" action="?/toggle" use:enhance>
            <input 
                name='id'
                value={element.id}
                aria-label="finished"
                class="hidden"
            />
            <div id={(i+200).toString()}>
                {element.finished}
            </div>

            <Button id={i.toString()} class="border border-blue-400 bg-white p-1">
                <!-- w-5 h-5 accent-sky-800 justify-self-center -->
                <div class="text-blue-400">
                    Toggle finished
                </div>
            </Button>
            </form>
            
                <div id={"todo_box"+i.toString()} class="col-span-3">
                    {element.todo}
                </div>
                <div id={"time_box"+i.toString()} class="col-span-2">
                    {element.time}
                </div>
                <form method="POST" action="?/remove" use:enhance>
                <div>
                    <input name="id" value={element.id} class="hidden"/>
                    <Button id={"delete"+i.toString()}
                        class="col-span-2 hover:bg-sky-900 bg-sky-700 p-1 m-1 justify-self-center text-sm"
                        onclick={() => remove_todo(element.id)} 
                    >
                        Delete
                    </Button>
                </div>
                </form>
        </div>

    {/each}
    <!-- เก็บไว้ใน element แต่ละตัวในค่า finished -->
    <!-- () เก็บค่าที่ได้, =>...ให้ทำอะไร... -->
                
    </ul>

<div class="grid grid-cols-4 gap-1 ">

    <form method="POST" action="?/add" use:enhance>
    <div class="mx-1 col-span-2">
        <label for="todo"> New To-do </label>
    </div>

    <div class="mx-1">
        <label for="time">Time</label>
    </div>

    <div class="col-start-1 col-span-2">
        <input class="mx-1 bg-slate-100 w-full rounded-md border border-slate-500" 
        id="todo" name='todo' bind:value={$form.todo} 
        aria-invalid={$errors.todo ? 'true' : undefined} {...$constraints.todo}/>
        {#if $errors.todo}<span class="invalid">{$errors.todo}</span>{/if}
    </div>

    <div>
        <input class="mx-1 bg-slate-100 w-full rounded-md border border-slate-500" 
        id="time" name='time' bind:value={$form.time} 
        aria-invalid={$errors.time ? 'true' : undefined} {...$constraints.time}/>
        {#if $errors.time}<span class="invalid">{$errors.time}</span>{/if} 
        <!-- บรรทัด if ไม่ได้ใช้เพราะถูกเช็คที่ ui (constraints) ตั้งแต่ก่อนเข้า server แล้ว -->
    </div>
    

    <div>
        <Button id='add' class="mx-1 p-1 flex self-center text-sm">
            Add
        </Button>
    </div>
    </form>
</div>

{#if $message}<h3>{$message}</h3>{/if}

<div class="mx-35 my-3">
    <Button class="shadow-lg shadow-slate-200/50 bg-slate-500 font-bold p-2 px-3" href="/" id="Menu page">
        Menu
    </Button>
    </div>

</div>

<SuperDebug data={$form} />
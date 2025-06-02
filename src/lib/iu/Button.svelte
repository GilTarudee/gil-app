<script lang="ts">
    import type { Snippet } from "svelte";
    let {
        children, 
        onclick,
        class: className,
        href,
        id
        
    } : {children: Snippet; 
        onclick?: any; 
        class?: string; 
        href?: string 
        id?:string
    } = $props();
</script>

{#if href}
    <a {href} class={`hover:bg-sky-700 text-center  p-1 bg-sky-500 rounded-md text-white ${className}`}
    {onclick}>
        {@render children()}
    </a>
{:else}
    <button id={id} class={`hover:bg-sky-700 text-center  p-1 bg-sky-500 rounded-md text-white ${className}`} {onclick}>
        {@render children()}
    </button>
{/if}


   
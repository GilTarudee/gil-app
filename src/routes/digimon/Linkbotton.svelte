<script lang="ts">
    import type { Snippet } from 'svelte';
    let { text, link, children, pixelX }: {text?: string; children: Snippet; link: string; pixelX?:string } = $props();

</script>

<a
    href={link}
    class={`m-2 rounded-md bg-pink-600 p-2 px-4 font-light text-white hover:bg-pink-500 hover:underline ${pixelX}`}
>
    {@render children()}
</a>
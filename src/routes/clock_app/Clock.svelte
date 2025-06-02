<script>
    import { onMount } from 'svelte';
	let date = $state(new Date());
	let hour = $derived(String(date.getHours()).padStart(2,'0'));
	let min = $derived(String(date.getMinutes()).padStart(2,'0'));


    // ตัวทำให้เวลาอัพเดทตลอดเวลา
    onMount( () => {
		const interval = setInterval(() => {
			date = new Date();
		}, 1000);
        return () => clearInterval(interval);
	});
</script>

<style>	
</style>

<p> 
    {hour}:{min}
</p>

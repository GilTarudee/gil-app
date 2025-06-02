<script>
	import { onMount } from 'svelte';
	let now = new Date();
	let weekday = String(now.toLocaleString('en-US', { weekday: 'short' })).toUpperCase(); 
  	let day = String(now.getDate()).padStart(2, '0');
  	let month = String(now.toLocaleString('en-US', { month: 'short' })).toUpperCase(); 
  	// let year = now.getFullYear();

  	let customDate = `${weekday} ${day} ${month}`;

	onMount( () => {
		const interval = setInterval(() => {
			now = new Date();
		}, 1000);
	});
</script>

<p>{customDate}</p>
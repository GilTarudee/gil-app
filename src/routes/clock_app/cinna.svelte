<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
  
    let images: string[] = [
      '/images/cinnamon1.png',
      '/images/cinnamon2.png'
    ];
  
    let currentIndex: number = 0;
    let currentImage: string = images[currentIndex];
  
    onMount(() => {
      const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        currentImage = images[currentIndex];
      }, 5000); // 5 วินาที
  
      return () => clearInterval(interval); 
    });
  </script>
  
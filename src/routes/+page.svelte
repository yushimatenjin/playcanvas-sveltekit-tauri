<script lang="ts">
	import { onMount } from 'svelte';
	import { createScene } from '$lib/playcanvas-scene';

	let el:HTMLCanvasElement;

	onMount(() => {
		createScene(el);
	});
</script>

<svelte:head>
	<title>PlayCanvas SvelteKit</title>
	<meta name="description" content="Three.js example app built with Svelte" />
</svelte:head>

<canvas bind:this={el} />
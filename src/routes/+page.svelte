<script lang="ts">
	import './styles.css';
	import Editor from './home/Editor/Editor.svelte';
	import Viewer from './home/Viewer/Viewer.svelte';
</script>

<main>
	<section>
		<Viewer />
	</section>
	<section>
		<Editor />
	</section>
</main>
<aside />

<style>
	main {
		display: flex;
		flex-flow: column nowrap;
		align-items: stretch;
		justify-content: stretch;
		width: 480px;
		height: 854px;
		background-color: #fff;
	}

	section {
		flex: 1 1 0;
	}
</style>

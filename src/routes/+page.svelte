<script lang="ts">
	import './styles.css';
	import Editor from './home/Editor/Editor.svelte';
	import Viewer from './home/Viewer/Viewer.svelte';
	import Overlay from './home/Overlay/Overlay.svelte';
	import Frames from './home/Frames/Frames.svelte';
	import Controls from './home/Controls/Controls.svelte';
	import editor from './home/Controls/editor';

	$: hidden = !$editor;
</script>

<main>
	<section>
		<Viewer />
	</section>
	<section class:hidden>
		<Editor />
	</section>
	<Overlay />
</main>
<aside>
	<section>
		<Frames />
	</section>
	<section>
		<Controls />
	</section>
</aside>

<style>
	main {
		position: relative;
		display: flex;
		flex-flow: column nowrap;
		align-items: stretch;
		justify-content: stretch;
		width: 480px;
		height: 854px;
	}

	aside {
		flex: 1 1 auto;
		display: flex;
		flex-flow: row nowrap;
		align-items: stretch;
		justify-items: stretch;
	}

	section {
		flex: 1 1 0;
	}

	section.hidden {
		flex: 0 0 0;
	}

	aside > section {
		border-left: solid 8px #ccc;
	}
</style>

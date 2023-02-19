<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import ace from 'ace-builds';
	import 'ace-builds/src-noconflict/ext-language_tools';
	import 'ace-builds/src-noconflict/mode-svg';
	import 'ace-builds/src-noconflict/theme-cobalt';
	import editor from './editor';
	import code from '../code';

	let container: HTMLDivElement;

	onMount(() => {
		if (container) {
			$editor = ace.edit(container, {
				customScrollbar: true,
				enableBasicAutocompletion: true,
				fontSize: 16,
				mode: 'ace/mode/svg',
				useSoftTabs: true,
				tabSize: 2,
				theme: 'ace/theme/cobalt',
				useWorker: false
			});
			$editor.on('change', () => ($code = $editor.getValue()));
		}
	});

	onDestroy(() => {
		$editor?.destroy();
	});
</script>

<div bind:this={container} />

<style>
    div {
        width: 100%;
        height: 100%;
    }
</style>

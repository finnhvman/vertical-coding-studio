<script lang="ts">
	import editor from '../Editor/editor';
	import beautify from 'ace-builds/src-noconflict/ext-beautify';

	function handleClick() {
		if ($editor) {
			beautify.formatOptions.spaceBefore = false;
			beautify.beautify($editor.session);
			$editor.replaceAll('/>', { needle: ' />' });
		}
	}
</script>

<button on:click={handleClick}> Format </button>

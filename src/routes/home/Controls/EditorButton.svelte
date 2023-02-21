<script lang="ts">
	import visible from './editor';

	function handleClick() {
		$visible = !$visible;
	}
</script>

<button on:click={handleClick}>Editor</button>

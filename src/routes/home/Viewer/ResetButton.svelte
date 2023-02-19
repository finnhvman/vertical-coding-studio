<script lang="ts">
	import { x, y, zoomFactor } from './viewer';

	function handleClick() {
		$x = 0;
		$y = 0;
		$zoomFactor = 0;
	}
</script>

<button on:click={handleClick}>Reset</button>

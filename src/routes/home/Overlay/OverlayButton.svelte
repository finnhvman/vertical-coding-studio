<script lang="ts">
	import overlay from '../Overlay/overlay';

	function handleClick() {
		$overlay = !$overlay;
	}
</script>

<button on:click={handleClick}>Overlay</button>

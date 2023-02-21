<script lang="ts">
	function handleClick() {
		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen();
		} else if (document.exitFullscreen) {
			document.exitFullscreen();
		}
	}
</script>

<button on:click={handleClick}> Fullscreen </button>

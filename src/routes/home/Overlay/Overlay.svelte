<script lang="ts">
	import overlay from './overlay';
</script>

{#if $overlay}
	<div class="overlay">
		<div class="right" />
		<div class="bottom" />
	</div>
{/if}

<style>
	.overlay {
		z-index: 10;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		pointer-events: none;
	}

	.right {
		position: absolute;
		top: 25%;
		left: 85%;
		right: 0;
		bottom: 0;
		opacity: 0.5;
		background-color: red;
	}

	.bottom {
		position: absolute;
		top: 85%;
		left: 0;
		right: 15%;
		bottom: 0;
		opacity: 0.5;
		background-color: red;
	}
</style>

<script lang="ts">
	import code from '../code';
</script>

<div>
	{@html $code}
</div>

<style>
	div {
		width: 100%;
		height: 100%;
	}

	div > :global(svg) {
		width: 100%;
		height: 100%;
	}
</style>

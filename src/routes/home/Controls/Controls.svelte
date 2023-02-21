<script lang="ts">
	import FullscreenButton from './FullscreenButton.svelte';
	import ResetButton from '../Viewer/ResetButton.svelte';
	import FormatButton from '../Editor/FormatButton.svelte';
	import EditorButton from './EditorButton.svelte';
	import OverlayButton from '../Overlay/OverlayButton.svelte';
	import SaveButton from '../Frames/SaveButton.svelte';
</script>

<div>
	<FullscreenButton />
	<ResetButton />
	<FormatButton />
	<EditorButton />
	<OverlayButton />
	<SaveButton />
</div>

<style>
	div {
		display: flex;
		flex-flow: column nowrap;
		align-items: flex-start;
		gap: 8px;
		padding: 8px;
	}
</style>

<script lang="ts">
	import frames from './frames';

	$: src = `data:application/json,${encodeURIComponent(JSON.stringify($frames, null, 2))}`;
</script>

<a download href={src}>Save</a>

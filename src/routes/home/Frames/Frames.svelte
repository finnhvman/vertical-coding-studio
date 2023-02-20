<script lang="ts">
	import FrameItem from './FrameItem.svelte';
	import frames from './frames';
	import code from '../code';

	let selection = 0;

	$: selectionChange(selection);
	function selectionChange(index: number) {
		$code = $frames[index].code;
	}

	$: codeChange($code);
	function codeChange(value: string) {
		const newFrames = [...$frames];
		const frame = {
			title: newFrames[selection].title,
			code: value
		};
		newFrames[selection] = frame;
		$frames = newFrames;
	}

	function add() {
		$frames = [
			...$frames,
			{
				title: '',
				code: ''
			}
		];
		selection = $frames.length - 1;
	}

	function copy() {
		const newFrames = [...$frames];
		newFrames.splice(selection + 1, 0, { ...newFrames[selection] });
		$frames = newFrames;
		selection++;
	}

	function moveUp() {
		const newFrames = [...$frames];
		const frame = newFrames[selection];
		newFrames.splice(selection, 1);
		selection--;
		newFrames.splice(selection, 0, frame);
		$frames = newFrames;
	}

	function moveDown() {
		const newFrames = [...$frames];
		const frame = newFrames[selection];
		newFrames.splice(selection, 1);
		selection++;
		newFrames.splice(selection, 0, frame);
		$frames = newFrames;
	}

	function del() {
		const newFrames = [...$frames];
		newFrames.splice(selection, 1);
		$frames = newFrames;
		selection--;
	}

	function onTitleChange(index: number, title: string) {
		const newFrames = [...$frames];
		newFrames[index].title = title;
		$frames = newFrames;
	}

	function onKeyDown(event: KeyboardEvent) {
		switch (event.key) {
			case 'Down':
			case 'ArrowDown':
				return selection < $frames.length - 1 && selection++;
			case 'Up':
			case 'ArrowUp':
				return 0 < selection && selection--;
			default:
				return;
		}
	}
</script>

<div class="container">
	<div>
		<button on:click={add}>Add</button>
		<button on:click={copy}>Copy</button>
		<button on:click={moveUp} disabled={selection === 0}>Move Up</button>
		<button on:click={moveDown} disabled={selection === $frames.length - 1}>Move Down</button>
		<button on:click={del} disabled={$frames.length === 1}>Delete</button>
	</div>
	<ol on:keydown={onKeyDown}>
		{#each $frames as { title, code }, index}
			<FrameItem
				{title}
				{code}
				placeholder={index + '.'}
				selected={selection === index}
				onSelect={() => (selection = index)}
				onTitleChange={(value) => onTitleChange(index, value)}
			/>
		{/each}
	</ol>
</div>

<style>
	.container {
		display: flex;
		flex-flow: column nowrap;
	}

	ol {
		flex: 1 1 0;
		list-style-type: none;
		padding: 0;
		width: 100%;
	}
</style>

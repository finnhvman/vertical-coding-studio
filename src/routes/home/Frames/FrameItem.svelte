<script lang="ts">
	export let title: string;
	export let code: string;
	export let placeholder: string;
	export let selected = false;
	export let onSelect: () => void;
	export let onTitleChange: (value: string) => void;

	let li: HTMLLIElement | undefined;

	// Focus on select
	$: selected && !li?.contains(document.activeElement) && li?.focus();

	$: src = `data:image/svg+xml,${encodeURIComponent(code)}`;

	function preventUpDown(event: KeyboardEvent) {
		switch (event.key) {
			case 'Down':
			case 'ArrowDown':
				event.stopPropagation();
				break;
			case 'Up':
			case 'ArrowUp':
				event.stopPropagation();
				break;
			default:
				return;
		}
	}

	function onInput(event: InputEvent) {
		const span = event.target as HTMLSpanElement;
		span.textContent && onTitleChange(span.textContent);
	}
</script>

<li
	class:selected
	bind:this={li}
	on:click={onSelect}
	on:keydown={() => {}}
	role="listbox"
	tabindex="0"
>
	<div class="preview"><img {src} alt="" /></div>
	<div class="title">
		<span
			class="text"
			on:keydown={preventUpDown}
			on:input={onInput}
			contenteditable
			data-placeholder={placeholder}>{title}</span
		>
		<div class="spacer" />
	</div>
</li>

<style>
	li {
		display: flex;
		flex-flow: row nowrap;
		align-items: flex-start;
		padding: 4px;
		gap: 4px;
		cursor: pointer;
	}

	.selected {
		background-color: #9ed1fa;
	}

	.preview {
		border: none;
		width: 48px;
		height: 48px;
		background-color: #fff;
		overflow: hidden;
	}

	img {
		width: 480px;
		height: 480px;
		transform: scale(0.1);
		transform-origin: top left;
	}

	.title {
		display: flex;
		flex-flow: column nowrap;
		flex: 1 1 0;
		align-self: stretch;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.text {
		cursor: text;
	}

	.text:not(:focus):empty::before {
		content: attr(data-placeholder);
		color: #666;
	}

	.spacer {
		flex: 1 1 0;
	}
</style>

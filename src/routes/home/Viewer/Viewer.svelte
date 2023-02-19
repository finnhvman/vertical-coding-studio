<script lang="ts">
	import code from '../code';
	import { x, y, zoomFactor } from './viewer';

	let panning = false;
	let zooming: '' | 'zoom-in' | 'zoom-out';
	let timeout: number;
	let width: number;
	let height: number;

	function clearZooming() {
		timeout && window.clearTimeout(timeout);
		timeout = window.setTimeout(() => (zooming = ''), 500);
	}
	$: zooming && clearZooming();

	$: cursor = panning ? 'grabbing' : zooming || 'default';

	function safeX(value: number) {
		const minX = (1 - 2 ** $zoomFactor) * width;
		return Math.min(Math.max(minX, value), 0);
	}

	function safeY(value: number) {
		const minY = (1 - 2 ** $zoomFactor) * height;
		return Math.min(Math.max(minY, value), 0);
	}

	function handleWheel(event: WheelEvent) {
		event.preventDefault();

		const prevZoomFactor = $zoomFactor;

		$zoomFactor = Math.max($zoomFactor - 0.2 * Math.sign(event.deltaY), 0);
		zooming = event.deltaY < 0 ? 'zoom-in' : 'zoom-out';

		const scaleChange = 2 ** ($zoomFactor - prevZoomFactor);

		$x = safeX(event.clientX + ($x - event.clientX) * scaleChange);
		$y = safeY(event.clientY + ($y - event.clientY) * scaleChange);
	}

	function handleMouseDown() {
		panning = true;
	}

	function handleMouseMove(event: MouseEvent) {
		if (panning) {
			$x = safeX($x + event.movementX);
			$y = safeY($y + event.movementY);
		}
	}

	function handleMouseUp() {
		panning = false;
	}
</script>

<div
	on:wheel={handleWheel}
	on:mousedown={handleMouseDown}
	on:mousemove={handleMouseMove}
	on:mouseup={handleMouseUp}
	bind:clientWidth={width}
	bind:clientHeight={height}
	style="--x: {$x}px; --y: {$y}px; --scale: {2 ** $zoomFactor}; --cursor: {cursor}"
	class:panning
>
	{@html $code}
</div>

<style>
	div {
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-color: #fff;
		cursor: var(--cursor, default);
	}

	div > :global(svg) {
		width: 100%;
		height: 100%;
		transform: translate(var(--x, 0), var(--y, 0)) scale(var(--scale, 1));
		transform-origin: top left;
		transition: transform 0.2s;
	}

	.panning {
		user-select: none;
	}

	.panning > :global(svg) {
		transition: none;
	}
</style>

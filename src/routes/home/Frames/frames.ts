import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import type Frame from './Frame';

function getFrames() {
	const frames = (browser && localStorage?.getItem('frames')) || '[{"title":"","code":""}]';
	return JSON.parse(frames);
}

function setFrames(frames: Frame[]) {
	browser && localStorage?.setItem('frames', JSON.stringify(frames));
}

const store = writable<Frame[]>(getFrames());
store.subscribe(setFrames);

export default store;

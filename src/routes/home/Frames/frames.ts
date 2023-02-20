import { writable } from 'svelte/store';
import type Frame from './Frame';

export default writable<Frame[]>([
	{
		title: '',
		code: ''
	}
]);

import { writable } from "svelte/store";
import type ace from 'ace-builds';

export default writable<ace.Ace.Editor>();

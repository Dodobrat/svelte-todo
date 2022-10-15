<script>
	import { setContext, getContext } from "svelte";

	let state = { sidebar: true };

	let methods = {
		toggleSidebar() {
			state = { ...state, sidebar: !state.sidebar };
		},
	};

	setContext("state", state);
	setContext("methods", methods);
</script>

<div class="flex w-full items-stretch min-h-screen isolate">
	{#if $$slots.sidebar}
		<div class={`w-0 relative shrink-0 z-10 transition-[width] ${state.sidebar ? "md:w-16 xl:w-64" : "md:w-16"}`}>
			<div
				class={`fixed overflow-y-auto overflow-x-hidden inset-y-0 left-0 overscroll-contain bg-slate-500 transition-[width] ${
					state.sidebar ? "w-64" : "md:w-16 w-0"
				}`}
			>
				<slot name="sidebar" />
				<button on:click={methods.toggleSidebar}>Toggle {state.sidebar}</button>
			</div>
		</div>
	{/if}
	<div class="relative flex flex-col grow min-h-full bg-slate-200 z-0">
		{#if $$slots.topbar}
			<div class="h-14 md:h-16 sticky -top-px bg-slate-800">
				<slot name="topbar" />
				<button on:click={methods.toggleSidebar}>Toggle {state.sidebar}</button>
			</div>
		{/if}
		<main class="grow">
			<slot name="content" />
		</main>
		{#if $$slots.footer}
			<footer>
				<slot name="footer" />
			</footer>
		{/if}
	</div>
</div>

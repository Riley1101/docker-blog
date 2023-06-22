<script>
	/**
	 * @type {{data:{title:string;author:string}[]}}
	 */
	export let data;
</script>

<ul>
	{#each data.data as { title, author }}
		<li>{title} - {author}</li>
	{/each}
</ul>

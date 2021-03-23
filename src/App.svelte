<script>
  import { onMount } from "svelte";
  let article;

  onMount(async () => {
    let res = await fetch("/api/news");
    article = await res.json();
    console.log(article);
  });
</script>

<main>
  <h1>World News</h1>
  <h2>{article ? article.title : 'Loading article...'}</h2>
  <p>{article ? article.description : ''}</p>
</main>

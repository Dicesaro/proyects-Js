export function PostCard(props) {
  let { date, slug, title, _links } = props;
  let dateFormat = new Date(date).toLocaleString();

  return `
    <article class="post-card">
      <img src="" alt="${title.rendered}">
      <h2>${title.rendered}</h2>
      <p>
        <time datatime="${date}">${dateFormat}</time>
        <a href="#/${slug}">Ver Publicacion</a>
      </p>
    </article>
  `;
}

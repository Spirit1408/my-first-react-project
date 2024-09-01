import css from "./ArticleList.module.css";

export default function ArticleList({ items,topic }) {
	return (
		<>
			<h1 className={css.title}>Latest articles by `{topic}`</h1>
			<ul className={css.list}>
				{items.map(({ objectID, url, title }) => (
					<li key={objectID}>
						<a
							className={css.link}
							href={url}
							target="_blank"
							rel="noreferrer noopener"
						>
							{title}
						</a>
					</li>
				))}
			</ul>
		</>
	);
}

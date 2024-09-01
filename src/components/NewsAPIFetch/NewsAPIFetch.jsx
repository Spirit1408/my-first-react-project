import css from "./NewsAPIFetch.module.css";
import { useState } from "react";
import { fetchArticlesWithTopic } from "../../articles-api";
import SearchForm from "./SearchForm/SearchForm";
import ArticleList from "./ArticleList/ArticleList";
import { Radio } from "react-loader-spinner";

export default function NewsAPIFetch() {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [topic, setTopic] = useState("");

	const handleSearch = async (topic) => {
		try {
			setArticles([]);
			setError(false);
			setLoading(true);
			setTopic(topic)

			const data = await fetchArticlesWithTopic(topic);
			setArticles(data);
		} catch (error) {
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className={css.newsContainer}>
			<SearchForm onSearch={handleSearch} />

			{loading && (
				<Radio
					visible={true}
					height="100"
					width="100"
					colors={["#00a2ff", "#00a2ff", "#00a2ff"]}
					ariaLabel="radio-loading"
					wrapperStyle={{
						backgroundColor: "transparent",
						margin: "0 auto",
						display: "block",
					}}
				/>
			)}

			{error && (
				<p className={css.info}>
					Whoops! Something went wrong. Please, try to reload this page again!
				</p>
			)}

			{articles.length > 0 ? (
				<ArticleList items={articles} topic={topic} />
			) : (
				!loading && <p className={css.info}>No news to show</p>
			)}
		</div>
	);
}

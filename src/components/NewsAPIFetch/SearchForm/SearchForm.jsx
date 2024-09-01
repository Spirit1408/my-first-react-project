import css from "./SearchForm.module.css";

export default function SearchForm({ onSearch }) {
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const topic = form.elements.topic.value;

		if (topic.trim() === "") {
			alert("Please, enter a search keyword!");
			return;
		}

		onSearch(topic);

		form.reset();
	};

	return (
		<form className={css.form} onSubmit={handleSubmit}>
			<input
				className={css.input}
				type="text"
				name="topic"
				placeholder="Search articles..."
			/>
			<button type="submit">Search</button>
		</form>
	);
}

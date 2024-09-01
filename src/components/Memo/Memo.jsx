import { useId, useMemo, useState } from "react";
import css from "./Memo.module.css";

export default function Memo() {
	const [planets, setPlanets] = useState(["Jupiter", "Venus", "Mars", "Earth"]);
	const [query, setQuery] = useState("");
	const [clicks, setClicks] = useState(0);
	const filterId = useId();

	const filteredPlanets = useMemo(
		() =>
			planets.filter((planet) =>
				planet.toLowerCase().includes(query.toLowerCase()),
			),
		[planets, query],
	);

	const handleRemovePlanet = (planetToRemove) => {
		setPlanets(planets.filter((planet) => planet !== planetToRemove));
	};

	const handleAddPlanet = () => {
		if (window.confirm(`Add ${query} to the list?`)) {
			setPlanets([...planets, query[0].toUpperCase() + query.slice(1)]);
			setQuery("");
		}
		return;
	};

	return (
		<>
			<div className={css.search}>
				<label htmlFor={filterId}>Search the planet</label>
				<input
					className={css.input}
					type="text"
					name="query"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					id={filterId}
				/>
			</div>

			{filteredPlanets.length === 0 && query && (
				<button className={css.addBtn} type="button" onClick={handleAddPlanet}>
					Add new planet
				</button>
			)}

			<ul className={css.list}>
				{filteredPlanets.map((planet) => (
					<li key={planet}>
						{planet}
						<button
							className={css.removeBtn}
							type="button"
							onClick={() => handleRemovePlanet(planet)}
						>
							Remove
						</button>
					</li>
				))}
			</ul>

			<button type="button" onClick={() => setClicks(clicks + 1)}>
				{clicks}
			</button>
		</>
	);
}

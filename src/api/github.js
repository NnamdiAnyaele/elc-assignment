import axios from "axios";

export async function getTrendingRepos(page, date) {
	const { data } = await axios.get(
		"https://api.github.com/search/repositories",
		{
			params: { q: `created:>${date}`, sort: "stars", order: "desc", page },
		}
	);
	return data;
}

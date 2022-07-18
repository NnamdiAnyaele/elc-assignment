import axios from "axios";

// https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc&page=1
export async function getTrendingRepo(page, date) {
	const { data } = await axios.get(
		"https://api.github.com/search/repositories",
		{
			params: { q: `created:>${date}`, sort: "stars", order: "desc", page },
		}
	);
	return data;
}

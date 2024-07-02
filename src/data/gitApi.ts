export async function fetchRepos(username: unknown) {
  const url = `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=17`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching repositories: ${response.statusText}`);
    }
    const repos = await response.json();
    return repos;
  } catch (error) {
    console.error(error);
    return [];
  }
}

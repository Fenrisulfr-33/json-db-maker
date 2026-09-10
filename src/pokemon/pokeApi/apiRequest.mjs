async function fetchData(endpoint) {
	const url = "https://pokeapi.co/api/v2/";
	const response = await fetch(url + endpoint);

	// Check if the request was successful
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	const data = await response.json();
	return data;
}

export { fetchData };

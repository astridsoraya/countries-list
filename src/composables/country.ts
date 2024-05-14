export async function getCountryDetails(country: string) {
    return await fetch(`${import.meta.env.VITE_API_COUNTRY}${country}`, {headers: {"Content-Type": "application/json"}}
    ).then(async value => {
        const response = await value.json();
        return response;
    }).catch(
        (error) => {
            console.error(error);
            return [];
    });
}
export function flattenCities(citiesByCountry) {
  const cities = [];
  const formattedCities = [];
  const countries = [];

  for (const country in citiesByCountry) {
    if (citiesByCountry.hasOwnProperty(country)) {
      const _cities = citiesByCountry[country];

      _cities.forEach((city) => {
        cities.push(city);
        formattedCities.push(`${city}, ${country}`);
        countries.push({ city, country });
      });
    }
  }

  return {
    cities,
    formattedCities,
    countries,
  };
}

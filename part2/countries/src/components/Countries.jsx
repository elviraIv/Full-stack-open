const Countries = ({ countriesToShow }) => {
  if (countriesToShow.length === 1) return null;

  return (
    <div>
      {countriesToShow.map((country) => (
        <div key={country.name.common}>{country.name.common}</div>
      ))}
    </div>
  );
};

export default Countries;

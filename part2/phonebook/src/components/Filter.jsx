const Filter = ({setFilter}) => {
  return (
    <div>
      filter shown with:{" "}
      <input
        onChange={({target})=> setFilter(target.value)}
        placeholder="enter your filter parameter..."
      />
    </div>
  );
};

export default Filter;

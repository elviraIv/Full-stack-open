const Filter = ({onChange}) => {
  return (
    <div>
      filter shown with:{" "}
      <input
        onChange={onChange}
        placeholder="enter your filter parameter..."
      />
    </div>
  );
};

export default Filter;

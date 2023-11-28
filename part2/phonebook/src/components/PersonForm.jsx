
const PersonForm = ({nameValue, onChangeName, numberValue , onChangeNumber, onClick}) => {
  return (
    <form>
        <div>
          name: <input value={nameValue} onChange={onChangeName} />
        </div>
        <div>
          number: <input value={numberValue} onChange={onChangeNumber} />
        </div>
        <div>
          <button type="submit" onClick={onClick}>
            add
          </button>
        </div>
      </form>

  )
}

export default PersonForm
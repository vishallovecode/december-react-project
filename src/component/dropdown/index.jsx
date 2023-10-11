import "./dropdown.css";
const DropDown = (props) => {
  // destructring from props object
  const { options, placeHolder, labelKey, idKey, value, handleChange } = props;

  return (
    <select value={value} className="select-cont" onChange={handleChange}>
      <option>{placeHolder}</option>
      {options?.map((opt) => {
        return <option value={opt[idKey]}>{opt[labelKey]}</option>;
      })}
    </select>
  );
};

export default DropDown;

//options  = [{id: 123 , label: '123'}]
// options  = [{orgId: 123 , orgName: '123'}]

import "./dropdown.css";
const DropDown = (props) => {
  // destructring from props object
  const { options, placeHolder, labelKey, idKey, value, handleChange } = props;

  console.log(options, labelKey, idKey, "props");

  return (
    <select value={value} className="select-cont" onChange={handleChange}>
      <option value="">{placeHolder}</option>

      {options?.map((opt) => {
        console.log(
          opt,
          "labelKey=>",
          labelKey,
          "opt[labelKey]=>",
          opt[labelKey]
        );
        return <option value={opt[idKey]}>{opt[labelKey]}</option>;
      })}
    </select>
  );
};

export default DropDown;

//options  = [{id: 123 , label: '123'}]
// options  = [{orgId: 123 , orgName: '123'}]

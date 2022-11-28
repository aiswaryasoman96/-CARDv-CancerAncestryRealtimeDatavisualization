import React, { useState } from 'react';
import Select, { components } from 'react-select';

export const colourOptions = [
    { value: 'afr', label: 'African/ African American',  },
    { value: 'amr', label: 'American Admixed / Latino', },
    { value: 'asj', label: 'Ashkenzai Jewish' },
    { value: 'fin', label: 'Finnish', },
    { value: 'nfe', label: 'Non Finnish European', },
    { value: 'sas', label: 'South Asian', },
    { value: 'eas_kor', label: 'East Asian Koreans', },
    { value: 'eas_jpn', label: 'Japanese', },
    { value: 'nfe_bgr', label: 'Non Finnish European Bulgarian', },
    { value: 'nfe_nwe', label: 'Non Finnish European North Western European', },
    { value: 'nfe_seu', label: 'Non Finnish European South European', },
    { value: 'nfe_swe', label: 'Swedish', },
    { value: 'oth', label: 'Other', },
    { value: 'nfe_onf', label: 'Non Finnish Eurpean Other', },
    { value: 'eas', label: 'East ASian', },
    { value: 'eas_oea', label: 'Other  East Asian', },
    { value: 'nfe_est', label: 'Non Finnish Eastern European', },
  ];

const IndicatorsContainer = (
  props
) => {
  return (
    <div style={{ background: colourOptions[2].color
     }}>
      <components.IndicatorsContainer {...props} />
    </div>
  );
};
const checkMax = (maxAllowed,setDisabled) => {
    if(maxAllowed > 4) {
        setDisabled(true);
    }
}
export default (props) => {
    const [maxAllowed,SetMax] = useState(2);
    const [disabled, setDisabled] = useState(false);
    return (
    <fieldset style={{
      marginTop: 25,
    }}
    disabled = {disabled}>
        <Select
        theme={'danger'}
    closeMenuOnSelect={true}
    components={{ IndicatorsContainer }}
    defaultValue={props.count}
    isMulti
    options={colourOptions}
    value={[...props.count]}
    onChange={(d) => {
      const newList = d.map(obj => ({value: obj.value,
      label: obj.label}))
      props.setCount(newList);
      SetMax(d.length)
    checkMax(maxAllowed,setDisabled)}}
  />
    </fieldset>
)};
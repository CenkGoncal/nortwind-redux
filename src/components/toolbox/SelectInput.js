import React, { useState } from "react";
import { Alert } from "reactstrap";

const SelectInput = ({
    name,
    label,
    onChange,
    defultOption,
    value,
    error,
    options
}) => {

const [visible, setVisible] = useState(true);

const onDismiss = () => setVisible(false);
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <select name={name} value={value} onChange={onChange} className="form-control" >
                <option value="">{defultOption}</option>
                {
                    options.map(op => {
                        return (
                            <option key={op.value} value={op.value}>{op.text}</option>
                        )
                    })

                }
            </select>
            {error &&
                    <Alert color="danger" isOpen={visible} toggle={onDismiss}>
                        {error}
                    </Alert>
                    
                }
        </div>
    );
}


export default SelectInput;
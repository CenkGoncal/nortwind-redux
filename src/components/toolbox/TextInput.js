import React, {useState} from "react";
import { Alert } from "reactstrap";

const TextInput = ({ name, label, onChange, placeHolder, value, error }) => {
    let wrapperClass = "form-group";

    if (error && error.length > 0) {
        wrapperClass += " has-error";
    }


    const [visible, setVisible] = useState(true);

    const onDismiss = () => setVisible(false);

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <input type="text" name={name}
                    className="form-control"
                    placeholder={placeHolder}
                    value={value}
                    onChange={onChange}
                    id={name}
                >

                </input>
                {error &&
                    <Alert color="danger" isOpen={visible} toggle={onDismiss}>
                        {error}
                    </Alert>
                    
                }
            </div>
        </div>
    );
};

export default TextInput;
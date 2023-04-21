import React from 'react'

const FormInput = ({ type, name, placeholder, required, value, disabled }) => {
    return (
        <fieldset>
            {type === 'textarea' ? (
                <textarea
                    placeholder={placeholder}
                    name={name}
                    tabIndex="5"
                    required={required}
                />
            ) : (
                <input
                    type={type}
                    value={value}
                    disabled={disabled}
                    placeholder={placeholder}
                    name={name}
                    tabIndex="1"
                    autoFocus={name === 'name'}
                    required={required}
                />
            )}
        </fieldset>
    )
}

export default FormInput

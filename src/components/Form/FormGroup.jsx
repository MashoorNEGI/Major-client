import Style from 'src/components/css/Login.module.css'
const FormGroup = ({ label, id, name, type, handleChange, handleBlur, value, required, autoComplete }) => {
    return (
        <div className={Style.formgroup}>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={name} onChange={handleChange} onBlur={handleBlur} value={value} required={required} autoComplete={autoComplete} />
        </div>
    )
}
export default FormGroup
function FieldText( props ) {
    return (
        <>
            <label> {props.label}</label>
            <input type="text" name={props.name} placeholder={props.placeholder} required={props.obrigatorio}/>
         </>
    )
}

export default FieldText;
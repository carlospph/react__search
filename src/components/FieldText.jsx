function FieldText({ campo }) {

    return (
        <>
            <label>{campo}</label>
            <input type="text" placeholder={campo} />
        </>
    )
}

export default FieldText;
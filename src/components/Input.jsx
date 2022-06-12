function Input ( { placeholder, name, onInput, className, onKeyPress }) {
    return (
        <>
            <input 
                className={className}
                placeholder={placeholder}
                name={name}
                type="text"
                onInput={onInput}
                onKeyPress={onKeyPress}
            />
        </>
    )
}

export default Input
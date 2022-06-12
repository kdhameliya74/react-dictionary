function Button ({name, onClick}) {
    return (
        <button className="button" type="button" onClick={onClick}>
            {name}
        </button>
    )
}

export default Button
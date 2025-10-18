export const Input = ({
    onClick,
    type,
    placeholder
}) => {
    return <span onClick={onClick} className= {`m-4 rounded-2xl text-4xl px-2 py-2 text-white cursor-pointer bg-blue-500`}>
        <input type={type} placeholder={placeholder} className= {`rounded-2xl text-4xl px-2 py-2 text-white cursor-pointer bg-blue-500 outline-none`}/>
    </span>
}
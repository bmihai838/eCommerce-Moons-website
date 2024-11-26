const Input = ({ field, placeholder }) => {
  return (
    <input
    {...field.inputProps}
    placeholder={placeholder}
    className="border-2 border-black w-full p-1 rounded-md"
  />
  )
}

export default Input
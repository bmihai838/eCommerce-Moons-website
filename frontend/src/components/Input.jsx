const Input = ({ field, placeholder }) => {
  return (
    <input
    {...field.inputProps}
    placeholder="placeholder"
    className="border-2 border-black placeholder:px-4 w-full p-1"
  />
  )
}

export default Input
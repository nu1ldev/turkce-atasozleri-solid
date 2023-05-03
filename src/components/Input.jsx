const Input = ({ label }) => {
  return (
    <input
      type="text"
      placeholder={label}
      onChange={evt => console.log(evt.currentTarget.value)}
      class='py-3 px-4 rounded focus:ring-teal-700 focus:ring-4 placeholder:text-gray-600 transition focus:placeholder:text-gray-800 bg-slate-400 outline-none text-lg w-full text-gray-800'
    />
  )
}

export default Input
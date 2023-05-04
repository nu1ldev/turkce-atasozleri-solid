const Button = ({ onClick, isOutlined, label, image, hasImage, classes }) => {
  return (
    <button
      class={
        classes +
        ` w-full flex-nowrap flex gap-x-1 focus:ring py-3 px-5 text-xl rounded-md ${
          isOutlined
            ? 'border-2 border-black bg-white text-black focus:ring-black'
            : 'transition bg-teal-700 hover:bg-teal-800 text-white focus:ring-teal-900'
        }`
      }
      onclick={() => onClick()}
    >
      {hasImage && (
        <img
          width={20}
          height={20}
          src={image}
          alt='Image'
        />
      )}
      {label}
    </button>
  )
}

export default Button

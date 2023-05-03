const Footer = () => {
  return (
    <div id="footer" class='h-[30rem] bg-teal-950'>
      <div class='flex justify-center text-white bottom-0' id="bottom">
        <p>
          <a class='text-teal-500 transition hover:text-teal-700 hover:underline' href="https://github.com/Null313">Null</a> tarafından bir proje | {new Date().getFullYear()}
        </p>
      </div>
    </div>
  )
}

export default Footer
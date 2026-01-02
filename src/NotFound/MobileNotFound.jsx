const MobileNotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-between py-16"
      style={{
        backgroundImage: "url('/404.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      {/* Text Overlay */}
      <div className="absolute bottom-2/3 w-full flex justify-center object-cover z-20">
        <h1 className="font-serif italic text-[#070f1a] opacity-60 text-center leading-none"
  style={{
    fontSize: "clamp(12rem, 18vw, 9rem)",
  }}>
          404
        </h1>
      </div>
        <div className="absolute bottom-10 w-full flex justify-center z-20">
            <h3 className="!text-4xl text-[#E6E6E6] !font-extrabold font-serif italic">
                This experience is <br />available only on Desktop devices.
            </h3>
        </div>
    </div>
  )
}

export default MobileNotFound

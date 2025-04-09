const Rresident = () => {
  return (
    <>
      <div className=" w-full relative h-[300px] md:h-[400px] lg:h-[500px]">
        {/* Background Image (50% height of parent) */}
        <div className="absolute top-0 left-0 w-full h-1/2">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
            alt="About Background"
            className="w-full h-full object-cover z-[-1]"
          />
          <div className="absolute inset-0 bg-black/40 z-0" />

          {/* Centered Text on Image */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
              For Residents
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}
export default Rresident;
export const SideLines = () => {
  return (
    <>
      <div className="absolute top-0 left-5 w-0.25 h-full bg-n-6"></div>
      <div className="absolute top-0 right-5 w-0.25 h-full bg-n-6"></div>
    </>
  );
};

export const BackgroundCircles = () => {
  return (
    <>
      <div className="absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-custom-dark to-custom-light rounded-full"></div>
      <div className="absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b  from-custom-dark to-custom-light rounded-full"></div>
      <div className="absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b  from-custom-dark to-custom-light rounded-full"></div>
    </>
  );
};

export const HamburgerMenu = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden bg-gray-200 ">
      <div className="absolute inset-0 opacity-[.03] "></div>

      {/* <SideLines /> */}

      {/* <BackgroundCircles /> */}
    </div>
  );
};

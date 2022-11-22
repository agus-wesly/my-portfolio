const Talk = () => {
  return (
    <div className="w-full flex flex-col py-7 gap-4 items-center">
      <h1 className="text-center text-lg text-white font-extrabold relative self-center after:content-[''] after:w-full after:absolute after:h-1 after:bg-secondary after:-bottom-1 after:left-0 mb-3">Let's Talk</h1>
      <form className="w-full">
        <div className="self-start w-full rounded-md border-secondary border-[0.5px] relative my-7">
          <input id="email" type="email" className="w-full bg-transparent outline-none h-full p-3 text-whiteblue font-normal text-sm" />
          <label className="absolute top-0 left-0 translate-x-3 text-secondary text-sm -translate-y-[10px] bg-primary" htmlFor="email">
            Email
          </label>
        </div>
        <div className="self-start w-[100%] h-[200px] rounded-md border-secondary border-[0.5px] relative my-10">
          <textarea id="email" type="text-area" className="w-full bg-transparent outline-none h-full p-3 text-whiteblue font-normal text-sm text-left" />
          <label className="absolute top-0 left-0 translate-x-3 text-secondary text-sm -translate-y-[12px] bg-primary" htmlFor="email">
            Message
          </label>
        </div>
        <button className="px-2 py-3 rounded-sm ring-1 w-full ring-secondary text-secondary font-bold text-center">Send</button>
      </form>
    </div>
  );
};

export default Talk;

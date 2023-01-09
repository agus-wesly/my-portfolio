import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Check from "./Check";

const Talk = ({ talkRef }) => {
  const [emailMsg, setEmailMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [sentSuccess, setSentSuccess] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_SERVICE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result?.status === 200) {
            setLoading(false);
            setSentSuccess(true);
            setEmailMsg("");
            setMsg("");
            setTimeout(() => {
              setSentSuccess(false);
            }, 2000);
          }
        },
        (error) => {
          console.error(error);
          setLoading(false);
        }
      );
  };
  return (
    <div ref={talkRef} className="w-full flex flex-col py-7 gap-4 items-center">
      <h1 className="text-center text-lg lg:text-[32px] text-white font-extrabold relative self-center after:content-[''] after:w-full after:absolute after:h-1 after:bg-secondary after:-bottom-1 after:left-0 mb-3 lg:mb-7">
        Let's Talk
      </h1>
      <form className="w-full" ref={formRef} onSubmit={handleSubmit}>
        <div className="self-start lg:hidden w-full rounded-md border-secondary border-[0.5px] relative my-7">
          <input
            value={emailMsg}
            onChange={(e) => setEmailMsg(e.target.value)}
            id="email"
            type="email"
            className="w-full bg-transparent outline-none h-full p-3 text-whiteblue font-normal text-sm"
            name="from_name"
            autoComplete="off"
          />
          <label
            className="absolute top-0 left-0 translate-x-3 text-secondary text-sm -translate-y-[10px] bg-primary"
            htmlFor="email"
          >
            Email
          </label>
        </div>
        <div className="self-start w-[100%] lg:hidden h-[200px] rounded-md border-secondary border-[0.5px] relative my-10">
          <textarea
            id="email"
            type="text-area"
            className="w-full bg-transparent outline-none h-full p-3 text-whiteblue font-normal text-sm text-left"
            name="message"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <label
            className="absolute top-0 left-0 translate-x-3 text-secondary text-sm -translate-y-[12px] bg-primary"
            htmlFor="email"
          >
            Message
          </label>
        </div>
        <button
          disabled={loading}
          className="px-2 py-3 lg:hidden rounded-sm ring-1 w-full ring-secondary text-secondary font-bold text-center"
        >
          {loading ? "Sending..." : "Send"}
        </button>
        <div className="hidden lg:flex w-full h-[440px] gap-0">
          <div className="w-[50%] flex h-full bg-white flex-col px-6 py-4 justify-between rounded-tl-lg rounded-bl-lg">
            <h1 className="text-[28px] text-center font-bold text-black capitalize">
              Send Me a message
            </h1>
            <div className="w-full border-primary border-2 z-[5] bg-yellow-400 relative my-3 after:content-[''] after:absolute after:w-full after:h-full after:bg-primary after:z-[-3] after:right-0 after:bottom-0 after:translate-x-2 after:translate-y-2">
              <input
                value={emailMsg}
                onChange={(e) => setEmailMsg(e.target.value)}
                id="email"
                type="email"
                className="w-full bg-transparent outline-none h-full p-3 text-primary font-semibold text-sm bg-white"
                name="from_name"
                autoComplete="off"
              />
              <label
                className="absolute top-0 left-0 translate-x-3 text-black font-bold text-[18px] -translate-y-[15px] bg-white"
                htmlFor="email"
              >
                Email
              </label>
            </div>
            <div className="w-full border-primary border-2 z-[5] relative my-3 after:content-[''] after:absolute after:w-full after:h-full after:bg-primary after:z-[-3] after:right-0 after:bottom-0 after:translate-x-2 after:translate-y-2 h-full">
              <textarea
                id="email"
                type="text-area"
                className="w-full bg-transparent outline-none h-full p-3 text-primary font-semibold text-sm bg-white"
                name="message"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />
              <label
                className="absolute top-0 left-0 translate-x-3 text-black font-bold text-[18px] -translate-y-[15px] bg-white"
                htmlFor="email"
              >
                Message
              </label>
            </div>
            <button
              disabled={loading}
              className="py-1 my-3 rounded-sm ring-primary ring-2 text-black font-bold text-[18px] text-center"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
          <div className="w-[50%] h-full bg-pattern bg-secondary bg-cover rounded-r-lg rounded-bl-lg"></div>
        </div>
      </form>
      <div
        className={`fixed bg-[#30FFCE] flex items-center gap-3 text-sm font-bold rounded-sm shadow-sm z-[6] top-11 right-6 p-3 ${
          sentSuccess
            ? "translate-x-0  opacity-1"
            : "translate-x-full  opacity-0"
        } transition duration-500`}
      >
        <span>{<Check color={"#0A192F"} />}</span>
        <p>Message sent !</p>
      </div>
    </div>
  );
};

export default Talk;

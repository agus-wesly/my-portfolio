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

    emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_TEMPLATE_SERVICE_ID, formRef.current, import.meta.env.VITE_PUBLIC_KEY).then(
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
      <h1 className="text-center text-lg text-white font-extrabold relative self-center after:content-[''] after:w-full after:absolute after:h-1 after:bg-secondary after:-bottom-1 after:left-0 mb-3">Let's Talk</h1>
      <form className="w-full" ref={formRef} onSubmit={handleSubmit}>
        <div className="self-start w-full rounded-md border-secondary border-[0.5px] relative my-7">
          <input value={emailMsg} onChange={(e) => setEmailMsg(e.target.value)} id="email" type="email" className="w-full bg-transparent outline-none h-full p-3 text-whiteblue font-normal text-sm" name="from_name" autoComplete="off" />
          <label className="absolute top-0 left-0 translate-x-3 text-secondary text-sm -translate-y-[10px] bg-primary" htmlFor="email">
            Email
          </label>
        </div>
        <div className="self-start w-[100%] h-[200px] rounded-md border-secondary border-[0.5px] relative my-10">
          <textarea id="email" type="text-area" className="w-full bg-transparent outline-none h-full p-3 text-whiteblue font-normal text-sm text-left" name="message" value={msg} onChange={(e) => setMsg(e.target.value)} />
          <label className="absolute top-0 left-0 translate-x-3 text-secondary text-sm -translate-y-[12px] bg-primary" htmlFor="email">
            Message
          </label>
        </div>
        <button disabled={loading} className="px-2 py-3 rounded-sm ring-1 w-full ring-secondary text-secondary font-bold text-center">
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
      <div className={`fixed bg-[#30FFCE] flex items-center gap-3 text-sm font-bold rounded-sm shadow-sm z-[6] top-11 right-6 p-3 ${sentSuccess ? "translate-x-0 opacity-1" : "translate-x-full opacity-0"} transition duration-500`}>
        <span>{<Check color={"#0A192F"} />}</span>
        <p>Message sent !</p>
      </div>
    </div>
  );
};

export default Talk;

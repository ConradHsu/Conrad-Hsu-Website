import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      {/* Adjusted font style to match "Publications" */}
      <h2 className="my-10 text-left text-7xl font-bold tracking-tight text-white ml-20">
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
          Get In Touch!
        </span>
      </h2>
      <div className="text-left ml-20 tracking-tighter">
        <a 
          href={`mailto:${CONTACT.email}`} 
          className="text-xl font-semibold text-neutral-400 hover:text-white border-b border-neutral-900"
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;


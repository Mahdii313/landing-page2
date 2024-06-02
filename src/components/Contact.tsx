import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div
      id="contactMe"
      className="flex sm:flex-row-reverse flex-col h-[500px] sm:h-[550px] md:h-[600px] lg:h-[700px] xl:h-[750px] 2xl:h-[800px]"
    >
      <div
        style={{ backgroundImage: "url('/Contact/contact.jpg')" }}
        className="h-1/2 sm:h-full w-full sm:w-4/6 bg-cover"
      ></div>
      <div className="relative h-1/2 sm:h-full w-full sm:w-2/6 p-5 bg-yellow-500 overflow-hidden">
        <ContactForm />
        <div className="absolute rounded-full bg-yellow-700 bg-opacity-50 top-0 left-0 -translate-x-1/3 -translate-y-1/3 size-40 sm:size-44 md:size-52 lg:size-64 xl:size-72 2xl:size-80"></div>
        <div className="absolute rounded-full bg-yellow-700 bg-opacity-60 bottom-0 right-0 translate-x-1/3 translate-y-1/3 size-52 sm:size-56 md:size-72 lg:size-80 xl:size-[350px] 2xl:size-[400px]"></div>
        <div className="absolute rounded-full bg-yellow-300 bg-opacity-60 top-0 right-0 -translate-x-[100px] sm:-translate-x-1/3 translate-y-1/3 size-32 sm:size-20 md:size-24 lg:size-32 xl:size-44 2xl:size-[200px]"></div>
      </div>
    </div>
  );
};

export default Contact;

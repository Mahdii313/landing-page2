import HireForm from "./HireForm";

const Footer = () => {
  return (
    <div
      id="hireMe"
      className="text-[12px] sm:text-base h-[100px] sm:h-[150px] lg:h-[200px] xl:h-[250px] bg-slate-950 text-slate-50 flex flex-col items-center justify-between p-5 font-RobotoMono"
    >
      <HireForm />
      This page developed by Mahdi Rostami &copy;
    </div>
  );
};

export default Footer;

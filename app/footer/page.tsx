const Footer = () => {
  return (
    <div className="border-t-[1px]">
      <div className="flex justify-evenly gap-4 p-2">
        <div>
          <div className="flex flex-col p-2 cursor-pointer text-lg">
            All rights reserved. @{new Date().getFullYear()} by Framecast AI
            Inc.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

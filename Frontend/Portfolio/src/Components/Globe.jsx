
export const Globe = () => {
  return (
    <div className="CobeVercelSection md:h-[100vh] h-[100vh] flex justify-center items-center">
      {/* Google Maps Embed Iframe */}
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7250.890491770226!2d46.822655133289324!3d24.67721653690664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f07876189c383%3A0xbf78c9e79ca3ae25!2sAl%20Fayha%2C%20Riyadh%2014254!5e0!3m2!1sen!2ssa!4v1745314830515!5m2!1sen!2ssa"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-2 border-gray-300 rounded-2xl w-full"
      ></iframe>
    </div>
  );
};

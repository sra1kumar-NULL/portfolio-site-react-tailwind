interface cardProps {
  title: string;
  name: string;
  techUsed: string[];
  repoLink: string;
}
export const Card = ({ title, name, techUsed, repoLink }: cardProps) => {
  return (
    <section className="w-full  flex flex-col items-start justify-center gap-2 m-2 p-4 ">
      <h3 className="text-white  text-xl font-bold  my-1">{title}</h3>
      <p className="text-slate-200 text-lg font-thin my-1">{name}</p>
      <section className="flex  gap-2 w-full flex-wrap my-1">
        {techUsed.map((tech) => (
          <div
            className="border-1 border-white bg-slate-800 rounded-full my-1 flex items-center px-2"
            key={tech}
          >
            <div className="p-1 bg-white rounded-full">
              <CustomIcons tech={tech} />
            </div>
            <p className="text-white p-2">{tech}</p>
            <hr />
          </div>
        ))}
      </section>
      <a
        className="bg-slate-300 text-slate-900 rounded-full p-1 w-20 cursor:pointer hover:bg-green-300 text-center"
        href={repoLink}
        target="_blank"
      >
        Code
      </a>
    </section>
  );
};
const CustomIcons = ({ tech }: { tech: string }) => {
  return (
    <>
      {(() => {
        switch (tech) {
          case "react":
            return (
              <img
                src="https://static-00.iconduck.com/assets.00/react-icon-512x456-50q7sk34.png"
                alt="react-icon"
                className="w-5 h-5 rounded-full border-black border-1"
              />
            );
          case "tailwind-css":
            return (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                alt="tailwind-icon"
                className="w-5 h-5 rounded-full border-black border-1"
              />
            );
          case "typescript":
            return (
              <img
                src="https://www.svgrepo.com/show/374144/typescript.svg"
                alt="typescript-icon"
                className="w-5 h-5 rounded-full border-black border-1"
              />
            );
          case "firebase":
            return (
              <img
                src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"
                alt="firebase-icon"
                className="w-5 h-5 rounded-full border-black border-1"
              />
            );
          case "nextjs":
            return (
              <img
                src="https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png"
                alt="nextjs-icon"
                className="w-5 h-5 rounded-full border-black border-1"
              />
            );
          case "go":
            return (
              <img
                src="https://static-00.iconduck.com/assets.00/golang-icon-398x512-eygvdisi.png"
                alt="go-icon"
                className="w-5 h-5 rounded-full border-black border-1"
              />
            );
          case "nodejs":
            return (
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png"
                alt="nodejs-icon"
                className="w-5 h-5 rounded-full border-black border-1"
              />
            );
          case "expressjs":
            return (
              <img
                src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png"
                alt="expressjs-icon"
                className="w-5 h-5 rounded-full border-black border-1"
              />
            );
          case "mongodb":
            return (
              <img
                src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png"
                alt="mongodb-icon"
                className="w-5 h-5 rounded-full border-black border-1"
              />
            );
          case "js":
            return (
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                alt="js-icon"
                className="w-5 h-5 rounded-full border-black border-1"
              />
            );
          case "flutter":
            return (
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/flutter-2038877-1720090.png"
                alt="flutter-icon"
                className="w-5 h-5 rounded-full border-black border-1"
              />
            );
          case "dart":
            return (
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/dart-programming-language-icon.png"
                alt="dart-icon"
                className="w-5 h-5 rounded-full border-black border-1"
              />
            );
          case "python":
            return (
              <img
                src="https://www.svgrepo.com/show/376344/python.svg"
                alt="python-icon"
                className="w-5 h-5 rounded-full border-black border-1"
              />
            );

          default:
            return (
              <img
                src="https://e7.pngegg.com/pngimages/661/898/png-clipart-react-javascript-library-web-development-vue-js-funding-icon-logo-symmetry.png"
                alt="react-icon"
                className="w-5 h-5 rounded-full"
              />
            );
        }
      })()}
    </>
  );
};

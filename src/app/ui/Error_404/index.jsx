import Link from "next/link";

const data = {
  title: "404",
  subtitle: "Oops! Page Not Found!",
  message:
    "Sorry, the page you're seeking isn't here. It could have been relocated or removed.",
  buttonText: "Return Home",
  buttonLink: "/",
};

const ErrorSection = () => {
  return (
    <section
      style={{
        marginTop: "150px",
        marginBottom: "150px",
      }}
    >
      <div className="container">
        <div className="cs_error text-center">
          <h2 className="cs_fs_120 cs_accent_color">{data.title}</h2>
          <h2 className="cs_fs_53 cs_normal">{data.subtitle}</h2>
          <p>{data.message}</p>

          <Link
            href={data.buttonLink}
            className="cs_btn cs_style_1 cs_bold cs_heading_bg cs_white_color"
            dangerouslySetInnerHTML={{ __html: data.buttonText }}
          ></Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorSection;

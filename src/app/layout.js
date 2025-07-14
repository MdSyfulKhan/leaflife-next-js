import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import AOSInit from "./helper/AosInit";
import ScrollToTopOnLoad from "./helper/ScrollToTopOneLoad";
import './sass/style.scss';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link
          rel="icon"
          type="/assets/img/favicon.png"
          href="/assets/img/favicon.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title></title>
      </head>
      <body className={``}>
        <AOSInit />
        <ScrollToTopOnLoad />
        {children}
      </body>
    </html>
  );
}

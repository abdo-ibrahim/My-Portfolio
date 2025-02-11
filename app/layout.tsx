import Header from "./component/Header/Header";
import "./globals.css";
import LoadingScreen from "./component/Loading/LoadingScreen";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <LoadingScreen>
          <Header />
          {children}
        </LoadingScreen>
      </body>
    </html>
  );
}

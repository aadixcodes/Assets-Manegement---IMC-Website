// import Header from "@/components/Header";
// import "./globals.css";
// import Footer from "@/components/Footer";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <Header/>
//         {children}
//         <Footer/>
//         </body>
//     </html>
//   );
// }

import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


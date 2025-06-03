import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme/theme-provider";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "tweet clone - Web App",
  description:
    "A to be dynamic tweet clone web application for browsing, searching, and learning about about everything happening in the world and making new friends knowing knew people API. Built with Next.js and styled for responsive performance.",
  icons: {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNrL1Kq27iR5mDkQQmFbSlw_HJ9Rv4EYDLw&s",
    apple: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNrL1Kq27iR5mDkQQmFbSlw_HJ9Rv4EYDLw&s",
    shortcut: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNrL1Kq27iR5mDkQQmFbSlw_HJ9Rv4EYDLw&s",
  },
  openGraph: {
    title: "tweet clone - Web App",
    description:
      "Browse, search, and make new friends characters with real-time data from the BurnaAPI. Beautiful, fast, and responsive tweet clone app built with Next.js.",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNrL1Kq27iR5mDkQQmFbSlw_HJ9Rv4EYDLw&s", // update with your actual URL
    siteName: "tweet clone",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNrL1Kq27iR5mDkQQmFbSlw_HJ9Rv4EYDLw&s", // change this to your OG image URL
        width: 1200,
        height: 630,
        alt: "Tweet clone Web App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "tweet clone - Web App",
    description:
      "With detail Info of all users , responsive web app powered by BurnaAPI and Next.js.",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNrL1Kq27iR5mDkQQmFbSlw_HJ9Rv4EYDLw&s"], // same image as above
    creator: "@burna-nation", // optional
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}

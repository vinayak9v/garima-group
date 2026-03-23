import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QuickEnquiry from "./com/QuickEnquiry";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ==========================================
   SEO METADATA CONFIGURATION
   Replace 'https://www.morvicropscience.com' 
   with your actual live domain.
========================================== */
export const metadata = {
  metadataBase: new URL('https://www.morvicropscience.com'), // CHANGE THIS TO YOUR ACTUAL DOMAIN
  
  title: {
    default: "Morvi Crop Science Pvt Ltd | Premium Agriculture Solutions",
    template: "%s | Morvi Crop Science" // This adds suffix to other pages automatically
  },
  
  description: "Morvi Crop Science Pvt Ltd empowers farmers with high-yield hybrid seeds, advanced insecticides, and premium fertilizers for maximum crop productivity.",
  
  keywords: [
    "Morvi Crop Science",
    "Agriculture India",
    "Hybrid Seeds",
    "Paddy Seeds",
    "Crop Protection",
    "Insecticides",
    "Herbicides",
    "Fungicides",
    "Agricultural Fertilizers",
    "Farming Solutions"
  ],

  authors: [{ name: "Morvi Crop Science" }],
  
  // How links look when shared on Facebook/LinkedIn/WhatsApp
  openGraph: {
    title: "Morvi Crop Science Pvt Ltd",
    description: "Trusted partner for Indian farmers. High-quality seeds and crop protection solutions.",
    url: 'https://www.morvicropscience.com',
    siteName: 'Morvi Crop Science',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Ensure you have this image in your public folder
        width: 1200,
        height: 630,
        alt: 'Morvi Crop Science Agricultural Products',
      },
    ],
  },

  // Twitter Card data
  twitter: {
    card: 'summary_large_image',
    title: "Morvi Crop Science Pvt Ltd",
    description: "Premium seeds and agricultural solutions for better yield.",
    images: ['/og-image.jpg'], // Same image as above
  },

  icons: {
    icon: '/favicon.ico', // Ensure you have a favicon in public folder
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Optional: Add JSON-LD Structured Data for Local Business/Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AgriculturalBusiness",
              "name": "Morvi Crop Science Pvt Ltd",
              "url": "https://www.morvicropscience.com",
              "description": "Leading provider of agricultural seeds, insecticides, and fertilizers.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9876543210", 
                "contactType": "customer service"
              }
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-900`}
      >
      
        {/* <MorviNavbar/> */}
        
        <main className="min-h-screen">
            {children}
          
        </main>
        
       
      </body>
    </html>
  );
}
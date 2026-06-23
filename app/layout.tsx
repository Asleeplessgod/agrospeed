import "./globals.css"

export const metadata = {
  title: "AgroSpeed",
  description: "Farm Fresh. Delivered Fast.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
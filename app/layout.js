export const metadata = {
  title: 'Lava Ice Cream Experience',
  description: 'Watch the ultimate lava ice cream experience',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}

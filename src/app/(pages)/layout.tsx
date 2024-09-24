export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
      </head>
      <body
        className='bg-stone-950'
      >
        <main className="px-4 pb-20 md:px-2">
          <div className="mx-auto max-w-screen-md">{children}</div>
        </main>
      </body>
    </html>
  );
}

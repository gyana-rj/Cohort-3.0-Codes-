export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>Only for signin and signup</div>
        {children}
        <div>User page is not affected</div>
      </body>
    </html>
  );
}

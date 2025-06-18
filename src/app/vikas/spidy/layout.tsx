export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1 className="text-3xl font-extrabold text-center mt-10 ">
        Spidy ka Nav Bar{" "}
      </h1>
      {children}
    </>
  );
}

if (typeof window === "undefined") {
  const { initServerMocks } = require("~/mocks");
  initServerMocks();
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import ErrorBoundary from "./components/ErrorBoundary";
import "./styles/color.css";
import "./styles/index.css";
import "./styles/tailwind.css";

export const metadata = {
  title: "Aloha",
  description: "created by Shatish D.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ErrorBoundary>
        <body>{children}</body>
      </ErrorBoundary>
    </html>
  );
}

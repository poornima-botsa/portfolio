import '../styles/globals.css';

export const metadata = {
  title: 'Poornima Portfolio',
  description: 'BOTSA POORNIMA | Full Stack Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

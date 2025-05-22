import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Next.js with Tailwind CSS',
  description: 'A boilerplate project with Next.js 15 and Tailwind CSS 3.4.17',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}  <script id="dhws-errorTracker" src="/dhws-error-tracker.js"></script>
  <script id="dhws-elementInspector" src="/dhws-web-inspector.js"></script>
</body>
    </html>
  );
}

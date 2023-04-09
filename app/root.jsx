import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import globalStyles from "./styles/global.css";

export const meta = () => ({
  charset: "utf-8",
  title: "Remix Blog",
  viewport: "width=device-width,initial-scale=1",
});

export const links = () => [
  { rel: "stylesheet", href: globalStyles },
  {
    rel: "stylesheet",
    href: "https://cdn.simplecss.org/simple.min.css",
  },
];

function Layout() {
  return (
    <main>
      <header>
        <Link to="/">
          <h1>Remix Blog Tutorial</h1>
        </Link>
      </header>
      <Outlet />
      <footer>
        <small>Copyright 2023 Simon C.</small>
      </footer>
    </main>
  );
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

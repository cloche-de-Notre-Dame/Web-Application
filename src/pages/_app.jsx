import "src/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/*  pagesディレクトリ内各ページの内容が入る */}
      <Component {...pageProps} />
      {/* 全ページに適用 */}
    </div>
  );
}

export default MyApp;

export const metadata = {
  title: 'About | 2025-05-10re',
  description: 'このページはAboutページです。',
};

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <p>このページはAboutページです。Next.jsで作成しました。</p>
      <a href="/" style={{ textDecoration: 'underline', color: 'blue' }}>
        トップページへ戻る
      </a>
    </div>
  );
}

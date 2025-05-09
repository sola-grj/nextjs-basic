export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="template">
      <h2>我是Template</h2>
      {children}
    </div>
  );
}

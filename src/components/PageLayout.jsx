import { Layout } from "antd";
export default function PageLayout({ children }) {
  return (
    <Layout.Content
      className="site-layout"
      style={{
        marginTop: 10,
        display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
      }}
    >
      <div
        className="site-layout-background"
        style={{
          padding: 100,
          minHeight: 380,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          
        }}
      >
        {children}
      </div>
    </Layout.Content>
  );
}
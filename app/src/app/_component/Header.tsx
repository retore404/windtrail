import themeDefinition from "../_themes/themeDefinition";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        paddingLeft: "8px",
        height: "48px",
        alignItems: "center",
        backgroundColor: themeDefinition.palette.primary.main,
      }}
    >
      <a style={{ color: "white", textDecoration: "none" }} href="/">
        Windtrail
      </a>
    </header>
  );
}

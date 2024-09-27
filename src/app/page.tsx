// import { Canvas, Header, SettingBar, ToolsBar } from "@/components";
import { CanvasApp } from "@/components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <Header /> */}
      {/* <main className={styles.main}> */}
      {/* <ToolsBar /> */}
      {/* <SettingBar /> */}
      {/* <Canvas /> */}
      {/* </main> */}
      <CanvasApp />
    </div>
  );
}

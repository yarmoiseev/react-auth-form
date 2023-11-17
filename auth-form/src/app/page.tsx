import "normalize.css";
import styles from "@/styles/page.module.scss";
import AuthForm from "@/components/AuthForm";

export default function Home() {
  return (
    <main className={styles.main}>
      <AuthForm></AuthForm>
    </main>
  );
}

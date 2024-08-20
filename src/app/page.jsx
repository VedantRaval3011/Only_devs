import styles from "./page.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import Menu from "@/components/menu/Menu";
import CardList from "@/components/cardList/CardList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured></Featured>
      <CategoryList></CategoryList>
      <div className={styles.content}> 
        <CardList></CardList>
        <Menu></Menu>
      </div>
    </div>
  );
}

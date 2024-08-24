import styles from "./page.module.css";
import { Categorias } from "./components/Categorias";
import { Produtos } from "./components/Produtos";

async function fetchProdutosApi() {
  const res = await fetch(
    "https://api.npoint.io/785efd8706abb840aff4/produtos"
  );

  if (!res.ok) {
    throw new Error("Não foi possível obter os dados");
  }

  const produtos = await res.json();

  return produtos;
}

async function fetchCategoriasApi() {
  const res = await fetch(
    "https://api.npoint.io/a73ec581ac70bf5db62b/categorias"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const categorias = await res.json();

  return categorias;
}

export default async function Home() {
  const produtos = await fetchProdutosApi();
  const categorias = await fetchCategoriasApi();

  return (
    <>
      <main className={styles.main}>
        <Categorias categorias={categorias} />
        <Produtos produtos={produtos} />
      </main>
    </>
  );
}

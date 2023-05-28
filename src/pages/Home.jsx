import { CHeader } from "../components";

function Home() {
  const { name } = JSON.parse(localStorage.getItem('sing_up_user'));

  return (
    <>
      <CHeader
        name={name}
      />
      <main>
        <article>
          <h2>Hours : Minutes : Seconds</h2>
        </article>
        <article>
          <input
            type="text"
          />
          <button>Iniciar</button>
        </article>
      </main>
    </>
  );
}

export default Home;
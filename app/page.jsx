import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Descubre y Comparte
            <br/>
            <span className="blue_gradient text-center">Prompts para la IA</span>
        </h1>
        <p className="desc text-center">Librería Prompts es una herramienta open-source del mundo moderno para descubrir, crear y compartir prompts creativos.</p>

        <Feed />
    </section>
  )
}

export default Home
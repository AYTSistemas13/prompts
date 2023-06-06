import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left"><span className="blue_gradient">{type} un Post</span></h1>
      <p className="desc text-left max-w-md">{type} y comparte increíbles prompts con el mundo y deja a tu imaginación correr libremente con cualquier plataforma motorizada con IA.</p>
      <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Tu IA Prompt</span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt : e.target.value })}
            placeholder="Escribe tu prompt aquí..."
            required
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">¿Para que plataforma? {` `}<span className="font-normal">(Ejemplo: chatgpt)</span></span>
          <input
            value={post.plataforma}
            onChange={(e) => setPost({ ...post, plataforma : e.target.value })}
            placeholder="Escribe para que plataforma..."
            required
            className="form_input"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Categoría {` `}<span className="font-normal">(#product, #webdevelopment, #idea)</span></span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag : e.target.value })}
            placeholder="categoría"
            required
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button type="submit" disabled={submitting} className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white">
            { submitting ? `${type}r...` : type }
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form
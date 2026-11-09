import Confete from './confete'

const URL_TABNEWS = 'https://www.tabnews.com.br'

async function buscarTotalDeConteudos() {
  try {
    const resposta = await fetch(`${URL_TABNEWS}/api/v1/contents?page=1&per_page=1&strategy=new`, {
      cache: 'no-store',
    })
    const total = Number(resposta.headers.get('x-pagination-total-rows'))
    return resposta.ok && Number.isFinite(total) ? total : null
  } catch {
    return null
  }
}

export default async function Page() {
  const total = await buscarTotalDeConteudos()

  return (
    <main className="construcao">
      <Confete />
      <span className="selo">Em desenvolvimento</span>
      <h1>🚧 Em construção</h1>
      <p className="frase">
        Estamos nesse exato momento reconstruindo o <em>TabNews do curso.dev</em> com agentes de IA.
      </p>
      <div className="cartao">
        {total === null ? (
          <p className="erro">Não foi possível carregar o total de conteúdos agora.</p>
        ) : (
          <>
            <strong className="numero">{total.toLocaleString('pt-BR')}</strong>
            <span className="legenda">conteúdos publicados no TabNews</span>
          </>
        )}
      </div>
      <a className="botao" href={URL_TABNEWS} target="_blank" rel="noopener noreferrer">
        Visitar o site oficial do TabNews →
      </a>
    </main>
  )
}

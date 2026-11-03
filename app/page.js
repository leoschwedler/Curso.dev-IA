const macacos = [
  'Chimpanzé', 'Gorila', 'Orangotango', 'Bonobo', 'Babuíno', 'Mandril', 'Macaco-prego',
  'Macaco-aranha', 'Sagui', 'Mico-leão-dourado', 'Macaco-rhesus', 'Macaco-japonês', 'Bugio', 'Gibão',
]

export default function Page() {
  return (
    <>
      <h1>🐒 Nomes de Macacos</h1>
      <ul>
        {macacos.map((nome) => (
          <li key={nome}>{nome}</li>
        ))}
      </ul>
    </>
  )
}

import { useSelector } from "react-redux"
import { Card } from "../component/Card"

export default function Main() {
  const pokemonData = useSelector(state => state.pokemon.data)

  return (
    <>
      {pokemonData.map(el => <Card key={el.id} pokemon={el} />)}
    </>
  )
}

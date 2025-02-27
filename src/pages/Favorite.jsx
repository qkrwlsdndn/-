import { useSelector } from "react-redux"
import { selectFavoritePokemons } from "../RTK/selector"
import { Card } from "../component/Card"

export default function Favorite() {
  const pokemon = useSelector(selectFavoritePokemons)
  return (
    <>
      {pokemon.map(el => <Card key={el.id} pokemon={el} />)}
    </>
  )
}
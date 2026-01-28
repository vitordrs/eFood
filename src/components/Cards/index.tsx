import { useEffect, useState } from 'react'
import CardList from '../CardList'
import { List } from './styles'
import type { Restaurante } from '../../models/restaurantes'

const Cards = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => setRestaurantes(data))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <h2>Carregando restaurantes...</h2>

  return (
    <List>
      {restaurantes.map((restaurante) => (
        <CardList
          key={restaurante.id}
          restaurante={restaurante}
        />
      ))}
    </List>
  )
}

export default Cards

import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import styles from './page.module.css'

interface Partner {
  id: string
  name: string
}

const Partners = () => {
  const [partners, setPartners] = useState<Partner[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const router = useRouter()

  useEffect(() => {
    axios.get('https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners')
      .then(res => setPartners(res.data))
  }, [])

  const handleEdit = (id: string) => {
    router.push(/partners/edit/\)
  }

  const handleDelete = (id: string) => {
    axios.delete(\https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners/\\)
      .then(() => setPartners(partners.filter(partner => partner.id !== id)))
  }

  return (
    <div className={styles.container}>
      <h1>Parceiros</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {partners.map(partner => (
            <tr key={partner.id}>
              <td>{partner.name}</td>
              <td>
                <button onClick={() => handleEdit(partner.id)}>Editar</button>
                <button onClick={() => handleDelete(partner.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.pagination}>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Anterior</button>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={partners.length === 0}>Próximo</button>
      </div>
    </div>
  )
}

export default Partners

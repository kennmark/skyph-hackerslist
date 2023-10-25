import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import HackerCard from '../components/home/HackerCard'
import HackerTable from '../components/home/HackerTable'
import { URI } from '../UriRoute'

const Home = () => {
  const [hackers, setHackers] = useState([])
  const [loading, setLoading] = useState(false)
  const [showType, setShowType] = useState('table')

  useEffect(() => {
    setLoading(true)
    axios
      .get(URI)
      .then((response) => {
        setHackers(response.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [])

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <Link to="/hackers/searchable-table">
          <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg">
            Searchable Data Table
          </button>
        </Link>

        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">SkyPH Hackers List</h1>
        <Link to="/hackers/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <HackerTable hackers={hackers} />
      ) : (
        <HackerCard hackers={hackers} />
      )}
    </div>
  )
}

export default Home

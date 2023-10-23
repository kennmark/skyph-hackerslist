import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import { MdOutlineDelete } from 'react-icons/md'
import { AiOutlineEdit } from 'react-icons/ai'

const ShowHacker = () => {
  const [hacker, setHacker] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    axios
      // .get(`http://localhost:5555/hackers/${id}`)
      .get(`https://skyph-hackerlists-api.onrender.com/hackers/${id}`)
      .then((response) => {
        setHacker(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [])
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Details Hacker - {hacker.username}</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Facebook:</span>
            <span className="text-xl mr-4 text-gray-500 font-bold">
              {hacker.fbname}
            </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">GC Name:</span>
            <span className="text-xl mr-4 text-gray-500 font-bold">
              {hacker.username}
            </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Group:</span>
            <span className="text-xl mr-4 text-gray-500 font-bold">
              {hacker.group}
            </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Position in GC:</span>
            <span className="text-xl mr-4 text-gray-500 font-bold">
              {hacker.position}
            </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Page Status:</span>
            <span
              className={`text-xl mr-4 text-gray-500 font-bold ${
                hacker.status === 'Removed' ? 'text-red-500' : 'text-amber-500'
              }`}
            >
              {hacker.status}
            </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Hacker?</span>
            <span
              className={`text-xl mr-4 text-gray-500 font-bold ${
                hacker.isHacker === 'Yes' ? 'text-red-500' : 'text-amber-500'
              }`}
            >
              {hacker.isHacker}
            </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Remarks:</span>
            <span className="text-xl mr-4 text-gray-500">{hacker.comment}</span>
          </div>
          <div className=" flex justify-evenly gap-x-2 mt-4 p-4">
            <Link to={`/hackers/edit/${hacker._id}`}>
              <span className="flex justify-evenly">
                <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black pr-1" />
                <h5>EDIT</h5>
              </span>
            </Link>
            <Link to={`/hackers/delete/${hacker._id}`}>
              <span className="flex justify-evenly">
                <MdOutlineDelete className="text-2xl text-red-600 hover:text-black pr-1" />
                <h5>DELETE</h5>
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowHacker

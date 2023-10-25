import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { URI } from '../UriRoute'

const EditHacker = () => {
  const [fbname, setFbname] = useState('')
  const [fbLink, setFbLink] = useState('')
  const [username, setUsername] = useState('')
  const [group, setGroup] = useState('')
  const [position, setPosition] = useState('')
  const [status, setStatus] = useState('Monitored')
  const [isHacker, setIshacker] = useState('Yes')
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    axios
      .get(URI + id)
      .then((response) => {
        setFbname(response.data.fbname)
        setFbLink(response.data.fbLink)
        setUsername(response.data.username)
        setGroup(response.data.group)
        setPosition(response.data.position)
        setStatus(response.data.status)
        setIshacker(response.data.isHacker)
        setComment(response.data.comment)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        alert('An Error happened. Please check console.')
        console.log(error)
      })
  }, [])

  const handleEditHacker = () => {
    const data = {
      fbname,
      fbLink,
      username,
      group,
      position,
      status,
      isHacker,
      comment,
      loading,
    }
    setLoading(true)
    axios
      .put(URI + id, data)
      .then(() => {
        setLoading(false)
        navigate('/')
      })
      .catch((error) => {
        setLoading(false)
        alert('An error happened. Please check console')
        console.log(error)
      })
  }

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Hacker {username}</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Facebook</label>
          <input
            type="text"
            value={fbname}
            onChange={(e) => setFbname(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            required
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Fb Link</label>
          <input
            type="text"
            value={fbLink}
            onChange={(e) => setFbLink(e.target.value)}
            className="border-2 border-gray-500 px-2 py-2 w-full"
            required
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">GC Name</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            required
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Group</label>
          <input
            type="text"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            required
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Position</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            required
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">
            Status
            <select
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
              className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option className="px-4 py-2 w-full" value="Monitored">
                Monitored
              </option>
              <option className="px-4 py-2 w-full" value="Removed">
                Removed
              </option>
            </select>
          </label>
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">
            Hacker?
            <select
              name="isHacker"
              value={isHacker}
              onChange={(e) => setIshacker(e.target.value)}
              required
              className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option className="px-4 py-2 w-full" value="No">
                No
              </option>
              <option className="px-4 py-2 w-full" value="Yes">
                Yes
              </option>
            </select>
          </label>
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Comment</label>
          <div className="mt-2">
            <textarea
              rows={3}
              defaultValue={comment}
              onChange={(e) => setComment(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            Write something about this hacker.
          </p>
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditHacker}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditHacker

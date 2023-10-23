import React from 'react'
import { Link } from 'react-router-dom'
import { BiSolidGhost } from 'react-icons/bi'
import { BsFacebook } from 'react-icons/bs'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
import { AiOutlineEdit } from 'react-icons/ai'
import { FaUserInjured } from 'react-icons/fa'
import { BiSolidGroup } from 'react-icons/bi'
import { BiNotepad } from 'react-icons/bi'

const HackerCardContainer = ({ hacker }) => {
  return (
    <div
      key={hacker._id}
      className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
    >
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
        {hacker.status === 'Monitored' ? 'Monitoring' : 'Removed/Left'}
      </h2>
      <h2 className="absolute top-10 right-2 px-4 py-1 bg-red-300 rounded-lg">
        {' '}
        {hacker.isHacker === 'Yes' ? 'Hacker' : 'Prospect Hacker'}
      </h2>
      <div className=" flex justify-start items-center gap-x-2">
        <BsFacebook className="text-red-300 text-2xl" />
        <h2 className="my-1">{hacker.fbname}</h2>
      </div>
      <div className=" flex justify-start items-center gap-x-2">
        <BiSolidGhost className="text-red-300 text-2xl" />
        <h2 className="my-1">{hacker.username}</h2>
      </div>
      <div className=" flex justify-start items-center gap-x-2">
        <BiSolidGroup className="text-red-300 text-2xl" />
        <h2 className="my-1">{hacker.group}</h2>
      </div>
      <div className=" flex justify-start items-center gap-x-2">
        <FaUserInjured className="text-red-300 text-2xl" />
        <h2 className="my-1">{hacker.position}</h2>
      </div>
      <div className=" flex justify-start items-center gap-x-2">
        <BiNotepad className="text-red-300 text-2xl" />
      </div>
      <div className=" flex justify-start items-center gap-x-2">
        <p className="my-1">{hacker.comment}</p>
      </div>
      <div className=" flex justify-evenly items-center gap-x-2 mt-4 p-4">
        <Link to={`/hackers/details/${hacker._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
        </Link>
        <Link to={`/hackers/edit/${hacker._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
        </Link>
        <Link to={`/hackers/delete/${hacker._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
        </Link>
      </div>
    </div>
  )
}

export default HackerCardContainer

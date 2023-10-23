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
      <h6
        className={`absolute top-2 right-2 px-2 py-1 rounded-lg ${
          hacker.status === 'Removed'
            ? 'badge badge-warning'
            : 'badge badge-primary'
        }`}
      >
        {hacker.status === 'Monitored' ? 'Monitoring' : 'Removed/Left'}
      </h6>
      <h6
        className={`absolute top-9 right-2 px-1 py-1 rounded-lg ${
          hacker.isHacker === 'Yes'
            ? 'badge badge-warning'
            : 'badge badge-primary'
        }`}
      >
        {' '}
        {hacker.isHacker === 'Yes' ? 'Hacker' : 'Prospect Hacker'}
      </h6>
      <div className=" flex justify-start items-center gap-x-2 py-1">
        <BsFacebook className="text-red-300 text-2xl" />
        <h6 className="my-1">{hacker.fbname}</h6>
      </div>
      <div className=" flex justify-start items-center gap-x-2 py-1">
        <BiSolidGhost className="text-red-300 text-2xl" />
        <h6 className="my-1">{hacker.username}</h6>
      </div>
      <div className=" flex justify-start items-center gap-x-2 py-1">
        <BiSolidGroup className="text-red-300 text-2xl" />
        <h6 className="my-1">{hacker.group}</h6>
      </div>
      <div className=" flex justify-start items-center gap-x-2 py-1">
        <FaUserInjured className="text-red-300 text-2xl" />
        <h6 className="my-1">{hacker.position}</h6>
      </div>
      <div className=" flex justify-start items-center gap-x-2 py-1">
        <BiNotepad className="text-red-300 text-2xl" />
      </div>
      <div className=" flex justify-start items-center gap-x-2 py-1">
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

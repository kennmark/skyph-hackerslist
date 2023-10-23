import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'

const HackerTable = ({ hackers }) => {
  return (
    <table className="table-auto w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">No</th>
          <th className="border border-slate-600 rounded-md">Facebook</th>
          <th className="border border-slate-600 rounded-md">Username</th>
          <th className="border border-slate-600 rounded-md">Group</th>
          <th className="border border-slate-600 rounded-md">GC Position</th>
          <th className="border border-slate-600 rounded-md">Page Status</th>
          <th className="border border-slate-600 rounded-md">Hacker</th>
          <th className="border border-slate-600 rounded-md">Actions</th>
        </tr>
      </thead>
      <tbody>
        {hackers.map((hacker, index) => {
          return (
            <tr key={hacker._id} className="h-8">
              <td className="border border-slate-700 rounded-md text-center">
                {index + 1}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {hacker.fbname}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {hacker.username}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {hacker.group}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {hacker.position}
              </td>
              <td
                className={`border border-slate-700 rounded-md text-center ${
                  hacker.status === 'Removed' ? 'text-red-500' : 'text-blue-500'
                }`}
              >
                {hacker.status}
              </td>
              <td
                className={`border border-slate-700 rounded-md text-center ${
                  hacker.isHacker === 'Yes' ? 'text-red-500' : 'text-blue-500'
                } `}
              >
                {hacker.isHacker}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                <div className="flex justify-center gap-x-4">
                  <Link to={`/hackers/details/${hacker._id}`}>
                    <BsInfoCircle className="text-2xl text-green-800" />
                  </Link>
                  <Link to={`/hackers/edit/${hacker._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-600" />
                  </Link>
                  <Link to={`/hackers/delete/${hacker._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600" />
                  </Link>
                </div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default HackerTable

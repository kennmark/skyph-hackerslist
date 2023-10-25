import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
import { CSVLink } from 'react-csv'

const HackerTable = ({ hackers }) => {
  const headers = [
    { label: 'Facebook', key: 'fbname', field: 'fbname', sort: 'asc' },
    { label: 'Username', key: 'username', field: 'username', sort: 'asc' },
    { label: 'Group', key: 'group', field: 'group', sort: 'asc' },
    { label: 'GC Position', key: 'position', field: 'position', sort: 'asc' },
    { label: 'Page Status', key: 'status', field: 'status', sort: 'asc' },
    { label: 'Hacker?', key: 'isHacker', field: 'isHacker', sort: 'asc' },
    { label: 'Remarks', key: 'comment', field: 'comment', sort: 'asc' },
  ]
  const data = {
    columns: [
      { label: 'Facebook', key: 'fbname', field: 'fbname', sort: 'asc' },
      { label: 'Username', key: 'username', field: 'username', sort: 'asc' },
      { label: 'Group', key: 'group', field: 'group', sort: 'asc' },
      { label: 'GC Position', key: 'position', field: 'position', sort: 'asc' },
      { label: 'Page Status', key: 'status', field: 'status', sort: 'asc' },
      { label: 'Hacker?', key: 'isHacker', field: 'isHacker', sort: 'asc' },
      { label: 'Remarks', key: 'comment', field: 'comment', sort: 'asc' },
    ],
    rows: hackers,
  }

  return (
    <div>
      <div className="my-3">
        <CSVLink
          data={hackers}
          headers={headers}
          filename="skyph-hackerlist"
          className="bg-green-800 text-white rounded-lg p-2 hover:bg-green-600"
        >
          Export CSV
        </CSVLink>
      </div>
      <table
        id="report"
        className=" table table-striped table-hover table-responsive table-auto"
      >
        <thead>
          <tr>
            <th className="border border-slate-600 rounded-md text-center align-middle">
              No
            </th>
            <th className="border border-slate-600 rounded-md text-center align-middle">
              Facebook
            </th>
            <th className="border border-slate-600 rounded-md text-center align-middle max-md:hidden">
              Username
            </th>
            <th className="border border-slate-600 rounded-md align-middle text-center">
              Group
            </th>
            <th className="border border-slate-600 rounded-md text-center align-middle max-md:hidden">
              GC Position
            </th>
            <th className="border border-slate-600 rounded-md text-center align-middle max-md:hidden">
              Page Status
            </th>
            <th className="border border-slate-600 rounded-md text-center align-middle">
              Hacker
            </th>
            <th className="border border-slate-600 rounded-md text-center align-middle">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {hackers.map((hacker, index) => {
            return (
              <tr key={hacker._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center ">
                  <a href={hacker.fbLink} target="_blank">
                    <span className="text-blue-500 font-medium">
                      {hacker.fbname}
                    </span>
                  </a>
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {hacker.username}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {hacker.group}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {hacker.position}
                </td>
                <td
                  className={`border border-slate-700 rounded-md  text-lg text-center max-md:hidden`}
                >
                  <span
                    className={`badge  rounded-pill d-inline ${
                      hacker.status === 'Removed'
                        ? 'badge-warning'
                        : 'badge-primary'
                    }`}
                  >
                    {hacker.status}
                  </span>
                </td>
                <td
                  className={`border border-slate-700 rounded-md text-center text-lg`}
                >
                  <span
                    className={`badge  rounded-pill d-inline text-2xl ${
                      hacker.isHacker === 'Yes'
                        ? 'badge-warning'
                        : 'badge-primary'
                    }`}
                  >
                    {hacker.isHacker}
                  </span>
                </td>
                <td className="border border-slate-700 rounded-md text-center align-middle">
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
    </div>
  )
}

export default HackerTable

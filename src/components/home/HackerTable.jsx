import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
import { DownloadTableExcel } from 'react-export-table-to-excel'
// import { MDBDataTable } from 'mdbreact'

const HackerTable = ({ hackers }) => {
  const tableRef = useRef(null)

  return (
    <div>
      <DownloadTableExcel
        filename="skyph-hackerslist"
        sheet="hackers"
        currentTableRef={tableRef.current}
      >
        <button className="bg-green-800 text-white p-2 rounded-lg my-3">
          {' '}
          Export Excel{' '}
        </button>
      </DownloadTableExcel>
      <table
        className=" table table-striped table-hover table-responsive table-auto"
        ref={tableRef}
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
                <td className="border border-slate-700 rounded-md text-center">
                  {hacker.fbname}
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
      {/* <MDBDataTable rows={hackers} /> */}
    </div>
  )
}

export default HackerTable

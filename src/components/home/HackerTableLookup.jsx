import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { CSVLink } from 'react-csv'
import { MDBDataTable } from 'mdbreact'
import { URI } from '../../UriRoute'
import BackButton from '../BackButton'

const HackerTableLookup = () => {
  const [hackers, setHackers] = useState([])
  const [loading, setLoading] = useState(false)
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
      {
        label: 'GC Position',
        key: 'position',
        field: 'position',
        sort: 'asc',
      },
      { label: 'Page Status', key: 'status', field: 'status', sort: 'asc' },
      { label: 'Hacker?', key: 'isHacker', field: 'isHacker', sort: 'asc' },
      { label: 'Remarks', key: 'comment', field: 'comment', sort: 'asc' },
    ],
    rows: hackers,
  }
  return (
    <div className="mx-4">
      <div className="my-3 flex justify-start gap-3">
        <BackButton />

        <CSVLink
          data={hackers}
          headers={headers}
          filename="skyph-hackerlist"
          className="bg-green-800 text-white rounded-lg p-2 hover:bg-green-600"
        >
          Export CSV
        </CSVLink>
      </div>
      <MDBDataTable
        theadColor="blue"
        theadTextWhite
        data={data}
        responsive
        striped
        hover
      />
    </div>
  )
}

export default HackerTableLookup

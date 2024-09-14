'use client'
'use strict'

import { useEffect, useState } from "react";

export default function Home() {

  const [allData, setAllData] = useState(null)
  const [currentCount, SetCurrentCount] = useState(null)
  const [updatedAt, setUpdatedAt] = useState(null)

  const addClick = async () => {
    const reqOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: 22,
    };

    const responce = await fetch('/api/clicks', reqOptions)
    const data = await responce.json()
    console.log(data)
  }


  const logData = (e) => {

    console.log('data', e)

  }



  useEffect(() => {

    document.addEventListener("click", () => {
      addClick();
    })
    const fetchData = async () => {
      try {
        const data = await fetch("/api/clicks")
        const responce = await data.json()
        logData(responce.runningCount)
        setAllData(responce.runningCount)
      } catch (e) {
        console.log(e);
      }
    }

    fetchData()
  }, [])

  if (!allData) {
    return <div>Loading...</div>
  } else {

    return (
      <div>
        <p> Running Count : {allData[0].click_count} </p>
        <p> Last Click : {allData[0].timestamp} </p>
      </div>
    )
  }
}


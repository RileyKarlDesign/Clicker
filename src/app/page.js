'use client'
'use strict'

import { useEffect, useState } from "react";

export default function Home() {

  const [allData, setAllData] = useState(null)
  const [currentCount, setCurrentCount] = useState(null)
  const [updatedAt, setUpdatedAt] = useState(null)

  const addClick = async () => {

    const reqOptions = {
      method: "POST",
      body: JSON.stringify("UPDATE allclicks.click_count SET click_count = 4000000"),
      headers: {
        "Content-type": "application/json"
      }
    }

    console.log(reqOptions.body)
    const response = await fetch("/api/clicks", reqOptions)


  }

  useEffect(() => {
    document.addEventListener("click", () => {
      addClick();
    })
    const fetchData = async () => {
      try {
        const data = await fetch("/api/clicks")
        const responce = await data.json()
        setAllData(responce.runningCount)
        setCurrentCount(responce.runningCount[0].click_count)
        setUpdatedAt(responce.runningCount[0].timestamp)

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
        <p> Running Count : </p>
        <p className="font-bold text-[100px] leading-tight">{currentCount} </p>
        <p> Last Click : {updatedAt} </p>
      </div>
    )
  }
}


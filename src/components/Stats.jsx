import React from 'react'
import {STATSDATA} from "../utils/data.js"
import StatsCard from './Cards/StatsCard'
const Stats = () => {
  return (
    <section className='bg-secondary'>
        <div className=" max-w-screen-lg flex justify-around mx-auto flex-wrap">
            {
                STATSDATA.map((item)=>(
                    <StatsCard key={item.label} iconUrl={item.iconUrl} count={item.count} label={item.label} />
                ))
            }
        </div>
    </section>
  )
}

export default Stats
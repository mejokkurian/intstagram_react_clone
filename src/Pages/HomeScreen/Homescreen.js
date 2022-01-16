import React from 'react'
import { Feed, Story, Suggestions, MiniProfile } from '../../components'


const Homescreen = () => {
  return (
    <div>
      <main className="grid grid-cols-1 md:grid-cols-2 max-w-3xl xl:grid-cols-3 xl:max-w-4xl mx-auto">
        <section className="col-span-2">
          {/* story and feed part */}
          <Story />
          <Feed />
        </section>
        <section className="hidden xl:inline-grid md:col-span-1">
          <div className='fixed top-20'>
            {/* suggestions and miniprofile */}
            <MiniProfile />
            <Suggestions />
          </div>
        </section>
      </main>
    </div>
  )
}

export default Homescreen

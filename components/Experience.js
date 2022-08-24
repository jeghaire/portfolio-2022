import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { AppWrap, MotionWrap } from '../wrappers'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Experience() {
  let [jobs] = useState({
    'Wigxel': [{
      id: 1,
      title: 'Software Engineer',
      company: 'Wigxel Corp',
      startDate: 'June 2022',
      endDate: 'Present',
      tasks: [
        {
          id: 4,
          content: 'Write modern, performant, maintainable code for a diverse array of client and internal projects'
        },
        {
          id: 5,
          content: 'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, React, Sanity, Tailwind, Prisma, and Netlify'
        },
        {
          id: 6,
          content: 'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis'
        }
      ]
    }],
    'WealthLine': [{
      id: 1,
      title: 'IT Support',
      company: 'WealthLine Nig. Ltd.',
      startDate: 'April 2021',
      endDate: 'March 2022',
      tasks: [
        {
          id: 1,
          content: 'Developed and maintained code for in-house apps primarily using HTML, CSS, SASS, JavaScript and React.js'
        },
        {
          id: 1,
          content: 'Created a database for collated data and creating react-powered interfaces for uploading the data'
        },
        {
          id: 2,
          content: 'Made decisions concerning platform, hardware and software choices for the company'
        }
      ]
    }],
    'SoftPoint': [{
      id: 1,
      title: 'Industrial Training',
      company: 'SoftPoint Apps',
      startDate: 'February 2016',
      endDate: 'September 2016',
      tasks: [
        {
          id: 4,
          content: 'Taught new interns basics of programming using C#'
        },
        {
          id: 5,
          content: 'Worked on the improvement of some features in the company’s web projects at the time'
        },
        {
          id: 6,
          content: 'Learnt Robotics and Automation'
        }
      ]
    }]
  })

  return (
    <section className="flex flex-col items-center py-20 px-2">
      <h1 className="mt-9 lg:mt-16 text-4xl md:text-5xl text-base-dark font-extrabold capitalize tracking-tight text-center">Work <span className="text-base-accent">Experience</span></h1>
      <div className="w-[90%] md:w-[80%] mt-[3rem] flex flex-row xl:w-full xl:flex-col mx-auto">
        <div className="w-full max-w-lg mx-auto">
          <Tab.Group vertical>
            <Tab.List className="flex space-x-1 rounded-xl bg-base-primary p-1">
              {Object.keys(jobs).map((job) => (
                <Tab
                  key={job}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 px-2 text-sm font-medium font-display leading-5 text-base-secondary truncate',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-base-secondary outline-none',
                      selected
                        ? 'bg-white shadow'
                        : 'text-base-dark hover:bg-white/[0.12] hover:text-base-secondary'
                    )
                  }
                >
                  {job}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(jobs).map((job, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    'rounded-xl bg-white p-3',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 outline-none'
                  )}
                >
                  <ul>
                    {job.map((post) => (
                      <li
                        key={post.id}
                        className="relative rounded-md p-3 hover:bg-gray-100"
                      >
                        <h3 className="text-lg font-medium leading-5">
                          {post.title}
                        </h3>

                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                          <li>{post.startDate}</li>
                          <li>&middot;</li>
                          <li>{post.endDate}</li>
                          <li>&middot;</li>
                          <li>{post.company}</li>
                        </ul>
                        <ul>
                          {post?.tasks.map(task => (
                            <li key={task.id} className="mt-3 flex space-x-1 text-base font-normal leading-4 text-gray-800 list-disk">{task.content}</li>
                          ))}
                        </ul>

                        {/* <a
                          href="#"
                          className={classNames(
                            'absolute inset-0 rounded-md',
                            'ring-blue-400 focus:z-10 outline-none focus:ring-2'
                          )}
                        /> */}
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  )
}

export default AppWrap(
  MotionWrap(Experience, 'flex-1 flex-col w-full'),
  'experience',
  'bg-white',
)
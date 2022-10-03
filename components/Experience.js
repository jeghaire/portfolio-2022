import { useState, useEffect } from 'react'
import { Tab } from '@headlessui/react'
import { AppWrap, MotionWrap } from '../wrappers'
import { configuredSanityClient } from '../sanity/client'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Experience() {
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    const query = '*[_type=="experiences"]'

    configuredSanityClient.fetch(query).then((data) => {
      data.sort((a, b) => { return b.sn - a.sn })
      setJobs(data);
    })
  }, [])

  return (
    <section id="experience" className="flex flex-col items-center py-20 px-2">
      <h1 className="mt-9 lg:mt-16 text-4xl md:text-5xl font-extrabold capitalize tracking-tight text-center">Work Experience</h1>
      <div className="w-[90%] md:w-[80%] mt-[3rem] flex flex-row xl:w-full xl:flex-col mx-auto">

        <div className="w-full max-w-lg mx-auto">
          <Tab.Group vertical>
            <Tab.List className="flex space-x-1 rounded-xl bg-gray-100 p-1">
              {jobs?.map((job) => (
                <Tab
                  key={job._id}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 px-2 text-sm font-medium font-display leading-5 text-base-secondary truncate',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-base-secondary outline-none',
                      selected
                        ? 'bg-white shadow'
                        : 'hover:bg-white/[0.45]'
                    )
                  }
                >
                  {job.alias}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {jobs?.map((job, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    'rounded-xl bg-white p-3',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 outline-none'
                  )}
                >
                  <ul>
                    <li
                      key={job.id}
                      className="relative rounded-md p-3 hover:bg-gray-100"
                    >
                      <h3 className="text-lg font-medium leading-5">
                        {job.title}
                      </h3>

                      <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                        <li>{job.startDate}</li>
                        <li>&middot;</li>
                        <li>{job.endDate}</li>
                        <li>&middot;</li>
                        <li>{job.company}</li>
                      </ul>
                      <ul>
                        {job?.tasks?.map(task => (
                          <li key={task.id} className="mt-3 flex space-x-1 text-base font-normal leading-4 text-gray-800 list-disk">{task.task}</li>
                        ))}
                      </ul>
                    </li>
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
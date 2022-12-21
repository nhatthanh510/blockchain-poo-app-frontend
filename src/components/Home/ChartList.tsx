import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Result from './Result'

type Props = {}

export default function ChartList({}: Props) {
  return (
    <div className='mx-auto max-w-2xl bg-[#20262f] rounded-sm p-4 mt-4'>
      <div className='flex gap-4'>
        <input
          type='text'
          placeholder='Filter'
          className='w-full bg-gray-700 text-xs text-[#cacaca] py-3 px-4 rounded-lg outline-none'
        />
        <button
          className='btn btn-sm px-4 py-2 rounded grow-0 shrink-0'
          disabled>
          Reload
        </button>
      </div>
      <Tabs className='home-list'>
        <TabList>
          <Tab>Wallet</Tab>
          <Tab>Starred</Tab>
          <Tab>History</Tab>
        </TabList>
        <TabPanel>
          <Result />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  )
}

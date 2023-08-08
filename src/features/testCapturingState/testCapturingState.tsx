/* eslint-disable no-plusplus */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseTest, selectTest } from './testCapturingStateSlice'

let testStale2 = 0
export default function TestCapturingState() {
  const dispatch = useDispatch()
  const testStale = useSelector(selectTest)
  const [testStale3, setTestStale3] = React.useState(0)
  const testStale4 = React.useRef(0)
  const [x, setX] = React.useState(false)
  const [y, setY] = React.useState(false)
  const [z, setZ] = React.useState(false)
  const [q, setQ] = React.useState(false)
  const test = () => console.log(testStale2)
  const promise = () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    new Promise((resolve) => {
      setTimeout(() => resolve(testStale), 1500)
    })
  const promise2 = () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    new Promise((resolve) => {
      setTimeout(() => resolve(testStale2), 1500)
    })
  const promise3 = () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    new Promise((resolve) => {
      setTimeout(() => resolve(testStale3), 1500)
    })
  const promise4 = () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    new Promise((resolve) => {
      setTimeout(() => resolve(testStale4.current), 1500)
    })
  React.useEffect(() => {
    promise().then((r) => {
      console.log(r)
      test()
    })
  }, [x])
  React.useEffect(() => {
    promise2().then((r) => {
      console.log(r)
      test()
    })
  }, [y])
  React.useEffect(() => {
    promise3().then((r) => {
      console.log(r)
    })
  }, [z])
  React.useEffect(() => {
    promise4().then((r) => console.log(r))
  }, [q])
  return (
    <div>
      <div>
        <button type="button" onClick={() => setX(!x)}>
          toggle Redux
        </button>
        <button type="button" onClick={() => dispatch(increaseTest())}>
          {testStale}
        </button>
      </div>
      <div>
        <button type="button" onClick={() => setY(!y)}>
          toggle let
        </button>
        <button
          type="button"
          onClick={() => {
            testStale2 += 1
          }}
        >
          +
        </button>
      </div>
      <div>
        <button type="button" onClick={() => setZ(!z)}>
          toggle state
        </button>
        <button type="button" onClick={() => setTestStale3((prev) => prev + 1)}>
          {testStale3}
        </button>
      </div>
      <div>
        <button type="button" onClick={() => setQ(!q)}>
          toggle ref
        </button>
        <button type="button" onClick={() => testStale4.current++}>
          {testStale4.current}
        </button>
      </div>
    </div>
  )
}

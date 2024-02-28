
"use client"

import { useRef, useState } from "react"
import { CONTENTS } from "../app/utils/commandHelper"
import Command from "./Command"
import styles from "./Terminal.module.css"

export default function Terminal() {
  const [commands, setCommands] = useState([])
  const [loading, setLoading] = useState(false)
  const terminalRef = useRef(null)

  const escapeHTML = (str) =>
    str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")

  const addCommand = async (command) => {
    try{

let output
setLoading(true)
setCommands([...commands, { command, output: "Loading..." }])
console.log(commands)
console.log(command)
if (`${command}` in CONTENTS) {
  output = await CONTENTS[`${command}`]()
} else if (command === "clear") {
  setLoading(false)
  return setCommands([])
} else {
  output = CONTENTS.error(escapeHTML(command))
}

setLoading(false)
setCommands([...commands.slice(0, commands.length), { command, output }])
if (terminalRef) {
  terminalRef.current.scrollTop = terminalRef.current.scrollHeight
}
    }catch(error){
console.log(error)
    }
    
  }

  return (
    <div className={styles.terminal} ref={terminalRef}>
      {/* <Command command="help" output="Some very long text will go in here" /> */}
      <div> </div>
      {/* // if commands is empty than below map function will return  empty array so it still passing command , and output   */}
      {commands.map(({ command, output }, index) => (
        <Command command={command} output={output} key={index} />
      ))}
      {!loading && <Command onSubmit={(command) => addCommand(command)} />}
    </div>
  )
}

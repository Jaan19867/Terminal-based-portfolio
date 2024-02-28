"use client"


import { useState } from "react"
import Input from "./Input";
import Output from "./Output"
// here input will set 

export default function Command({command, output , onSubmit}){
    // const [isInput,setIsInput]=useState(false)
    return (
      <div>
        <Input
          command={command}
        //   isInput={isInput}
          onSubmit={(command) => onSubmit(command)}
        />
        { <Output output={output} />}
      </div>
    )
}
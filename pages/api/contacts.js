
import Cors from "cors"


export default function handler(req,res){
const contacts = [
  {
    medium: "gmail",

    link: "https://mail.google.com/mail/?view=cm&fs=1&to=mustafamustafa9891@gmail.com",
    username: "Md Rizabul",
  },
  {
    medium: "github",
    link: "https://github.com/Jaan19867",
    username: "Jaan19867",
  },
  {
    medium: "linkedin",
    link: "https://www.linkedin.com/in/md-rizabul-074bbb256/",
    username:"Md Rizabul"
  },
]
    return res.json(contacts)
}






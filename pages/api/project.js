export default function handler(req, res) {
  if (req.method === "GET") {
    const projects = [
      {
        name: "Car Hub ",
        description: "It helps user to find his Dream Car .",
        stack: ["Typescript", "NextJS"],
        link: "https://car-info-zeta.vercel.app/",
      },
      {
        name: "Fitness -Info-App",
        description:
          "Helps Usre to find the info about various types of exercise .",
        stack: ["Javascript"],
        link: "https://f1tness-app.netlify.app/",
      },
      {
        name: "Weather And State-Info",
        description:
          "Helps User to know the currect and past weather adn basic state info of state ",
        stack: ["React", "Apex Chart ", "Tailwind"],
        link: "https://project-ten-beta.vercel.app/",
       
      },
   
    ]
    return res.json(projects)
  } else {
    return res.status(400).json({ message: "Only GET reques" })
  }
}

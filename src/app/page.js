import Terminal from "@/componensts/Terminal";
// import styles from "../styles/Home.module.css";



export default function Home() {
  return (
    <div>
      <h1 style={{ fontSize: "40px" }}>
        Md Rizabul :
        <span>
          <br></br>Type help to start
        </span>
      </h1>
      <p>
        Visit{" "}
        <a href="https://project-ten-beta.vercel.app/" target="_blank">
          Go to my portfolio Website{" "}
        </a>
      </p>
      <Terminal />
    </div>
  )
}

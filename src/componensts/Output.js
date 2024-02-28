export default function Output({ output }) {
  return output ? <p dangerouslySetInnerHTML={{ __html: output }}></p> : <> </>
}
// above output will set which is very easy if output exist than show a paragraph if not than empty p
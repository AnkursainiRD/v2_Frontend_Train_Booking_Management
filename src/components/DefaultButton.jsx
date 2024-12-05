import "../styles/DefaultButton.css"

function DefaultButton({text}) {
  return (
    <div className='btn'>
        <p>
            {text? text:"Err"}
        </p>
    </div>
  )
}

export default DefaultButton
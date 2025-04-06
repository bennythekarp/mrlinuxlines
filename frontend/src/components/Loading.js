
const Loading = () => {

  const styledLoadingImg = {
    width: '100px',
    height: '100px'
  }

  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/images/MLL_penguin1.jpeg`}
        alt="penguin"
        style={styledLoadingImg}
      />
      <h2>L o a d i n g . . .</h2>

    </div>
  )
}

export default Loading
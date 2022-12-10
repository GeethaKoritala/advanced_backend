const time = async (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms)
  }) 
}

const fetchUserDetails = async(userID) => {
  console.log('fetching user details')
  await time(500)
  return 'http://image.example.com/$(userID)'
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('http://image.example.com/$(userID)')
//     }, 500)
//   }) 
}

const downloadImage = async (imageURL) => {
  console.log('Download Image')
  await time(1000)
  return 'image data for $(imageURL)'
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('image data for $(imageURL)')
//     }, 500)
//   }) 
}

const render = async (image) => {
  await time(1000)
  console.log('Render Image')
}

const run = async () => {
  const imageURL = await fetchUserDetails('john')
  const imageData = await downloadImage(imageURL)
  await render(imageData)
}
run()


// fetchUserDetails('john')
//   .then((imageURL) => downloadImage(imageURL))
//   .then((ImageData) => render(ImageData))
//   .catch((error) => {
//     console.log(error)
//   })
// fetchUserDetails('john', (imageURL) => {
//   downloadImage(imageURL, (imageData) => {
//     render(imageData)
//   })
// })

// PROMISE SYNTAX
// const aPromise = new Promise((resolve, reject) => {
// })
// ASYNC TO MAKE PROMISE EASIER



const fetchUserDetails = (userID) => {
  console.log('fetching user details')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('http://image.example.com/$(userID)')
    }, 500)
  }) 
}

const downloadImage = (imageURL, callback) => {
  console.log('Download Image')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('image data for $(imageURL)')
    }, 500)
  }) 
}

const render = (image) => {
  console.log('Render Image')
}
fetchUserDetails('john')
  .then((imageURL) => downloadImage(imageURL))
  .then((ImageData) => render(ImageData))
  .catch((error) => {
    console.log(error)
  })
// fetchUserDetails('john', (imageURL) => {
//   downloadImage(imageURL, (imageData) => {
//     render(imageData)
//   })
// })

// const aPromise = new Promise((resolve, reject) => {

// })



import React, {Component} from 'react'

class Index extends Component {
  handleFileUpload (e) {
    var formData = new FormData()
    const file = e.target.files[0]
    formData.append('fileInput', file)

    let xhr = new XMLHttpRequest()
    // your url upload
    xhr.open('post', '/upload', true)
    xhr.send(formData)
  }

  render () {
    return (
      <input type='file' name='fileInput' onChange={this.handleFileUpload} />
    )
  }
}

export default Index

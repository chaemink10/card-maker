class ImageService {
  constructor() {
    this.url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLODINARY_NAME}/image/upload`;
  }

  async upload(files) {
    const formData = new FormData();
    formData.append('file', files);
    formData.append('api_key', process.env.REACT_APP_CLODINARY_API_KEY);
    formData.append('upload_preset', process.env.REACT_APP_CLODINARY_PRESET);

    return fetch(this.url, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        const result = JSON.parse(data);
        return result;
      });
  }
}

export default ImageService;

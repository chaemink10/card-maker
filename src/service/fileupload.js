class ImageService {
  constructor() {
    this.url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLODINARY_NAME}/image/upload`;
  }

  async upload(files) {
    const formData = new FormData();
    formData.append('file', files);
    formData.append('api_key', process.env.REACT_APP_CLODINARY_API_KEY);
    formData.append('upload_preset', process.env.REACT_APP_CLODINARY_PRESET);

    const result = await fetch(this.url, {
      method: 'POST',
      body: formData,
    });
    return await result.json();
  }
}

export default ImageService;

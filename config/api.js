const baseUrl='http://127.0.0.1:8084';
module.exports={
  '/admin': {
    target: baseUrl,
    changeOrigin: true,
  }
}


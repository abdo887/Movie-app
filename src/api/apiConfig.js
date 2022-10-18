const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '78c834f5641d4c3424dc40ac61a3aaa3',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;

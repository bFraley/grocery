function groceryAPIService($resource) {
    const api = {
        gitems: $resource('/api/groceryapp/',)
    
    };

    return api;
}

export default groceryAPIService;
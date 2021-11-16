const apiKey = '24288297-9796b0f766b3e57b69a5fe9b1';

export default {
  searchQuery: '',
  page: 1,
  apiService() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;

    return fetch(url)
      .then(res => res.json())
      .then(data => {
        this.page += 1;
        return data.hits;
      })
      .catch(error => console.log(error));
  },
  resetPage() {
    this.page = 1;
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },
};

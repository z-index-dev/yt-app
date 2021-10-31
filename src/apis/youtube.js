import axios from 'axios';

const KEY = 'AIzaSyB2qt3B_8lmEBc8QC4h8cqxsDQMi-VauKA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})
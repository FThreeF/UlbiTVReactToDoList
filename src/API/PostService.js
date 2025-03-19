import axios from 'axios';
import {createRef} from 'react';

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    response.data = response.data.map((post) => ({
      ...post,
      nodeRef: createRef(null),
    }));
    return response;
  }


  static async getById(id) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts/' + id);
    
    return response;
  }

  static async getCommentsByPostId(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    return response;
  }
}

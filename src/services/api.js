import axios from 'axios';

const API_BASE_URL = 'https://api-books-dot-api-samples-423102.uc.r.appspot.com/api';
const API_TOKEN = '101010'; 

export const fetchBooks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/books`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`, 
        Accept: 'application/json', 
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar todos os livros:", error);
    return [];
  }
};

export const searchBooks = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/books`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        Accept: 'application/json', 
      },
      params: { q: query },  // Certifique-se de que a API usa o parâmetro 'q' para a pesquisa
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    return [];
  }
};


export const fetchBookDetails = async (bookId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/books/${bookId}`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`, 
        Accept: 'application/json', 
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao obter detalhes do livro:", error);
    return null;
  }

};



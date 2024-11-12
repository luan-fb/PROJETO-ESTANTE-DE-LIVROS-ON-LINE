import axios from 'axios';

const API_BASE_URL = 'https://api-books-dot-api-samples-423102.uc.r.appspot.com/api';
const API_TOKEN = '101010'; // Seu RA como chave de autorização

export const fetchBooks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/books`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`, // Use "Bearer" antes do RA
        Accept: 'application/json', // Cabeçalho adicional conforme visto no comando curl
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
        Authorization: `Bearer ${API_TOKEN}`, // Use "Bearer" antes do RA
        Accept: 'application/json', // Cabeçalho adicional
      },
      params: { q: query },
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
        Authorization: `Bearer ${API_TOKEN}`, // Use "Bearer" antes do RA
        Accept: 'application/json', // Cabeçalho adicional
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao obter detalhes do livro:", error);
    return null;
  }
};

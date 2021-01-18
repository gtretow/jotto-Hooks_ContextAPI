import axios from "axios";

export const getSecretWord = async (setSecretWord) => {
  const response = await axios.get(
    "https://random-word-api.herokuapp.com/word?number=1"
  );
  setSecretWord(response.data);
};

//default export for mocking convenience

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getSecretWord,
};

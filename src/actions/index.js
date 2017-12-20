import axios from 'axios';

import { API_URL, API_KEY } from '../config.js';

axios.defaults.headers.post['Authorization'] = `Bearer ${API_KEY}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export function getDrink() {

  console.log('HELLO');
  const config = JSON.stringify({
    "headers": {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    }
  });

  const body = JSON.stringify({
    "Inputs": {
      "input1": {
        "ColumnNames": [
          "PersonID",
          "SodaID",
          "Drink Rating"
        ],
        "Values": [
          [
            "R_bmEmiEyQZGiKIZH",
            "",
            ""
          ]
        ]
      }
    },
    "GlobalParameters": {}
  });

  return (
    axios.post(`${API_URL}`, body)
      .then((response) => {
        console.log(response);
        const drink = response;

      })
      .catch((err) => {
        console.error('error getting the drink: ', err);
      })
  );
}

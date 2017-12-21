import axios from 'axios';
import _ from 'lodash';

import { API_URL, API_KEY } from '../config.js';

axios.defaults.headers.post['Authorization'] = `Bearer ${API_KEY}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const sodaKey = require('../assets/soda-key.json');

export function getDrink(user) {
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
            `${user.id}`,
            "",
            ""
          ]
        ]
      }
    },
    "GlobalParameters": {}
  });

  let firstDrink = _.get(sodaKey, user.drink1);
  let secondDrink = _.get(sodaKey, user.drink2);

  let drinkPrefs = { firstDrink, secondDrink };

  return drinkPrefs
    // axios.post(`${API_URL}`, body)
    //   .then((response) => {
    //     console.log(response);
    //     let drink1 = response.output1.value.Values[0[1]];
    //     let drink2 = response.output1.value.Values[0[2]];
    //
    //     let firstDrink = _.get(sodaKey, drink1);
    //     let secondDrink = _.get(sodaKey, drink2);
    //   })
    //   .catch((err) => {
    //     console.error('error getting the drink: ', err);
    //   })
}

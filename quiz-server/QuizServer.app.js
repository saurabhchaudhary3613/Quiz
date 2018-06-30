/**
 * To build WebService
 */
const express = require('express');
const app = express(); //express returns object Refernce 

//data
const jsQuestions = [{"qNo": "01_", "question": "222222Which Appollo mission landed the first humans on the Mooons ?", "answers": ["de Boulogne", "Champ de Mars", "Jardin des Plantes", "Parc de Belleville"], "correct": '1'},
        {"qNo": "02_", "question": "11111Which Appollo mission landed the first humans on the Mooon ?", "answers": ["Apollo 7", "Apollo 9", "Apollo 11", "Apollo 13"], "correct": '1'},
        {"qNo": "03_", "question": "333333Who starred in the 1959 epic film Ben Hur ?", "answers": ["Charlton Heston", "Clark Gable", "Errol Flynn", "Lee Marvin"], "correct": '1'},
        {"qNo": "04_", "question": "444444Which Appollo mission landed the first humans on the Mooon?", "answers": ["de Boulogne", "Bios de Boulogne", "Bios de Boulogne", "Bios de Boulogne"], "correct": '3'},
        {"qNo": "05_", "question": "55555555Which Appollo mission landed the first humans on the Mooon ?", "answers": ["Apollo 7", "Apollo 9", "Apollo 11", "Apollo 13"], "correct": '1'},
        {"qNo": "06_", "question": "6666666Who starred in the 1959 epic film Ben Hur ?", "answers": ["Charlton Heston", "Clark Gable", "Errol Flynn", "Lee Marvin"], "correct": '2'},
        {"qNo": "07_", "question": "777777The Eiffel Tower is located where in Paris  where in Paris?", "answers": ["de Boulogne", "Champ de Mars", "Jardin des Plantes", "Parc de Belleville"], "correct": '1'},
        {"qNo": "08_", "question": "88888888Which Appollo mission landed the first humans on the Mooon ?", "answers": ["Apollo 7", "Apollo 9", "Apollo 11", "Apollo 13"], "correct": '1'},
        {"qNo": "09_", "question": "9999999Who starred in the 1959 epic film Ben Hur ?", "answers": ["Charlton Heston", "Clark Gable", "Errol Flynn", "Lee Marvin"], "correct": '2'},
        {"qNo": "10_", "question": "1000The Eiffel Tower is located where in Paris ?", "answers": ["de Boulogne", "Bios de Boulogne", "Bios de Boulogne", "Bios de Boulogne"], "correct": '3'},
        {"qNo": "12_", "question": "11111Which Appollo mission landed the first humans on the Mooon ?", "answers": ["Apollo 7", "Apollo 9", "Apollo 11", "Apollo 13"], "correct": '1'},
        {"qNo": "13_", "question": "1222222222222Who starred in the 1959 epic film Ben Hur where in Paris?", "answers": ["Charlton Heston", "Clark Gable", "Errol Flynn", "Lee Marvin"], "correct": '2'},
        {"qNo": "14_", "question": "133333333333The Eiffel Tower is located where in Paris where in Paris?", "answers": ["de Boulogne", "Champ de Mars", "Jardin des Plantes", "Parc de Belleville"], "correct": '1'},
        {"qNo": "15_", "question": "1555555555Which Appollo mission landed the first humans on the Mooon ?", "answers": ["Apollo 7", "Apollo 9", "Apollo 11", "Apollo 13"], "correct": '1'}
];

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Writing api's - RestFull webservices
app.get('/api/questions', function (req, res) {
    res.json(jsQuestions);
});

app.listen(8081, function () {
    console.log('Server is Ready!');
});
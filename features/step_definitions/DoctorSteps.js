const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const {medico, viajante} = require("./../../app");


Given('um médico chamado {string}', function (string) {
    medico.name = string;
});
       
   
When('Doctor encontra {string} doente', function (string) {
    string = viajante;
    medico.heal(string);
});

When('Doctor encontra {string} saudável', function (string) {
    string = viajante;
    medico.heal(string);
});
       
  

Then('{string} ficará saudável', function (string) {
    string = viajante;
    assert.strictEqual(string.isHealthy, true);
});

Then('{string} permanecerá saudável', function (string) {
    string = viajante;
    assert.strictEqual(string.isHealthy, true);
});
       


       
   
         
       
const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

// const Traveler = require("./../../models/Traveler");
const {cacador, viajante} = require("../../app");



Given('um caçador chamado {string}', function (string) {
    cacador.name = string;
});

Given('que sempre inicia viagem com {int} comidas', function (int) {
    cacador.qtFood = int;
});
       
Given('que sempre inicia viagem saudável.', function () {
    cacador.isHealthy = true;
});



When('o Hunter caçar {int} vez\(es)', function (int) {
    When('o Hunter caçar {float} vez\(es)'), function (float) {
        for (let count = 0; count < int; count++) {
            cacador.hunt();
        }    
    }
    });

    When('o Hunter caçar {int} vez\(es)', function (int) {
    for (let count = 0; count < int; count++) {
        cacador.hunt();
    }
});
 
When('o Hunter comer {int} vez\(es)', function (int) {
    for (let count = 0; count < int; count++) {
        cacador.eat();
    }
});

When('um {string} lhe pedir {int} comida', function (int) {
    cacador.giveFood(viajante, int);
});





Then('a quantidade de comida deve ser {int}', function (int) {
    assert.strictEqual(cacador.qtFood, int);
});

Then('o Hunter não ficará doente', function () {
    assert.strictEqual(cacador.isHealthy = true);
});  
       
Then('o Hunter ficará doente', function () {
    assert.strictEqual(cacador.isHealthy = false);
});

Then('o Hunter nega o pedido e a quantidade de comida deve ser {int}', function (int) {
    assert.strictEqual(cacador.qtFood, int);
});


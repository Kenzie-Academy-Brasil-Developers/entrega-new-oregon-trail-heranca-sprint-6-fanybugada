#language: pt

Funcionalidade: Hunter
    Como Hunter, tenho facilidade em adquirir comida 
    mas preciso de mais comida para me manter saudável.
    Posso oferecer comida para outros viajantes. 

    Contexto: 
        Dado um caçador chamado "Hunter"
        E que sempre inicia viagem com 2 comidas
        E que sempre inicia viagem saudável.


        Cenário: Saiu para caçar e adquiriu mais comida
            Quando o Hunter caçar 1 vez(es)
            Então a quantidade de comida deve ser 7

        Cenário: Comeu e permaneceu saudável
            Quando o Hunter comer 1 vez(es)
            Então a quantidade de comida deve ser 0
            E o Hunter não ficará doente

        Cenário: Comeu e não ficou saudável
            Quando o Hunter comer 2 vez(es)
            Então a quantidade de comida deve ser 0
            E o Hunter ficará doente

        Cenário: Saiu para caçar e ofereceu comida para outro viajante
            Quando o Hunter caçar 1 vez(es)
            E um "viajante" lhe pedir 1 comida
            Então a quantidade de comida deve ser 6

        Cenário: Saiu para caçar e não ofereceu comida para outro viajante
            Quando o Hunter caçar 1 vez(es)
            E um "viajante" lhe pedir 10 comidas
            Então o Hunter nega o pedido e a quantidade de comida deve ser 7

        Cenário: Saiu para caçar, comeu e permaneceu saudável
            Quando o Hunter caçar 3 vez(es)
            E o Hunter comer 3 vez(es)
            Então a quantidade de comida deve ser 11
            E o Hunter não ficará doente

        Cenário: Saiu para caçar, comeu e não ficou saudável
            Quando o Hunter caçar 1 vez(es)
            E o Hunter comer 4 vez(es)
            Então a quantidade de comida deve ser 0
            E o Hunter ficará doente

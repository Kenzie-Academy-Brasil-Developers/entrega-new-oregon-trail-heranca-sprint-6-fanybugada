## Doctor

#Um médico é um **viajante** que se dá melhor curando outros viajantes, como médico ele deve curar outros viajantes para 
#que eles possam seguir a viagem saudável. Ele possui apenas um método.

### Método ``heal(traveler)``

#Este método cura viajantes doentes fazendo com que eles sigam viagem saudáveis.Nesta etapa um viajante será passado como 
#parâmetro para o método .heal(), para viajantes doentes, a propriedade isHealthy do viajante deverá mudar para true. 
#Para viajantes que não estão doentes a saúde do mesmo, deve continuar como verdadeiro

#language: pt

Funcionalidade: Doctor
    Como Doctor, possuo a habilidade de curar viajantes
    que estejam doentes, para que possam seguir a viagem saudáveis 

    Contexto:
        Dado um médico chamado "Doctor"


        Cenário: Encontrou viajante doente
            Quando Doctor encontra "viajante" doente
            Então "viajante" ficará saudável

        Cenário: Encontrou viajante saudável
            Quando Doctor encontra "viajante" saudável
            Então "viajante" permanecerá saudável
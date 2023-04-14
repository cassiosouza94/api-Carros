const carService = require("../services/CarService");

module.exports = {
    buscarTodosOsCarros: async function (_, response) {
        let json = { error: "", result: [] };
        let carros = await carService.buscarTodosOsCarros();
        for (let i in carros) {
            json.result.push({
                codigo: carros[i].codigo,
                description: carros[i].modelo
            });
        }
        response.json(json);
    },

    buscarCarro: async function (request, response) {
        let json = { error: "", result: {} };
        let codigo = request.params.codigo;
        let carro = await carService.buscarCarro(codigo);
        if (carro) {
            json.result = carro;
        }
        response.json(json);
    },

    cadastrarCarro: async function (request, response) {
        let json = { error: "", result: {} };
        let modelo = request.body.modelo;
        let placa = request.body.placa;
        if (modelo && placa) {
            let carroCodigo = await carService.cadastrarCarro(modelo, placa);
            json.result = {
                codigo: carroCodigo,
                modelo,
                placa
            };
        } else {
            json.error = "Campos não enviados corretamente ❌📝";
        }
        response.json(json);
    },

    alterarDados: async function (request, response) {
        let json = { error: "", result: {} };
        let codigo = request.params.codigo
        let modelo = request.body.modelo;
        let placa = request.body.placa;
        if (codigo && modelo && placa) {
            await carService.alterarDados(codigo, modelo, placa);
            json.result = {
                codigo,
                modelo,
                placa
            };
        } else {
            json.error = "Campos não enviados corretamente ❌📝";
        }
        response.json(json);
    },

    deletarCarro: async function (request, response) {
        let json = { error: "", result: {} };
        await carService.deletarCarro(request.params.codigo);
        response.json(json);
    }
};
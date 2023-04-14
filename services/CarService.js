const connect = require("../database");

module.exports = {
    buscarTodosOsCarros: function () {
        return new Promise(function (accept, reject) {
            connect.query("SELECT * FROM carros", function (error, results) {
                if (error) { reject(error); return; }
                accept(results);
            });
        });
    },

    buscarCarro: function (codigo) {
        return new Promise(function (accept, reject) {
            connect.query("SELECT * FROM carros WHERE codigo = ?", [codigo], function (error, results) {
                if (error) { reject(error); return; }
                if (results.length > 0) {
                    accept(results[0]);
                } else {
                    accept(false);
                }
            });
        });
    },

    cadastrarCarro: function (modelo, placa) {
        return new Promise(function (accept, reject) {
            connect.query("INSERT INTO carros (modelo, placa) VALUES (?, ?)",
                [modelo, placa],
                function (error, results) {
                    if (error) { reject(error); return; }
                    accept(results.insertCodigo);
                }
            );
        });
    },

    alterarDados: function (codigo, modelo, placa) {
        return new Promise(function (accept, reject) {
            connect.query("UPDATE carros SET modelo = ?, placa = ? WHERE codigo = ?",
                [modelo, placa, codigo],
                function (error, results) {
                    if (error) { reject(error); return; }
                    accept(results);
                }
            );
        });
    },

    deletarCarro: function (codigo) {
        return new Promise(function (accept, reject) {
            connect.query("DELETE FROM carros WHERE codigo = ?", [codigo], function (error, results) {
                if (error) { reject(error); return; }
                accept(results);
            });
        });
    }
};
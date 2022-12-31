CREATE TABLE IF NOT EXISTS clientes (
    id_clientes INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR (100) NOT NULL,
    sobrenome VARCHAR (100) NOT NULL,
    nascimento DATE NOT NULL,
    id_enderecos INT UNSIGNED NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (enderecos) REFERENCES  enderecos(id_enderecos)
);
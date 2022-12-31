CREATE TABLE IF NOT EXISTS  enderecos ( 
    id_enderecos INT UNSIGNED NOT NULL AUTO_INCREMENT,
    logradouro VARCHAR (100) NOT NULL,
    bairro VARCHAR (100) NOT NULL,
    cidade VARCHAR (100) NOT NULL,
    estado VARCHAR (2) NOT NULL,
	cep VARCHAR (9) NOT NULL,
    id_cliente INT UNSIGNED NOT NULL,
	PRIMARY KEY (id),
    FOREIGN KEY (cliente) REFERENCES cliente (id_clientes)
);

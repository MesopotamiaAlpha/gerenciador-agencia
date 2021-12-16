drop database cadastroPassageiros;
create database cadastroPassageiros;
use cadastroPassageiros;

##area dos cadastros de prinex

CREATE TABLE IF NOT EXISTS `cadastroPassageiros`.`prinex` (
  `id_pri` INT NOT NULL AUTO_INCREMENT,
  `destinatario` VARCHAR(90) NOT NULL,
  `tipo` VARCHAR(10) NULL DEFAULT NULL,
  `cte` INT NOT NULL,
  `cad_data` VARCHAR(10) NULL DEFAULT NULL,
  PRIMARY KEY (`id_pri`))
ENGINE = InnoDB;


create table if not exists nome (
	id_nome INT NOT NULL AUTO_INCREMENT,
	nome_passageiro VARCHAR(50) NOT NULL
);


CREATE TABLE IF NOT EXISTS `cadastroPassageiros`.`classe` (
  `id_classe` INT NOT NULL AUTO_INCREMENT,
  `classe_bus` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id_classe`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `cadastroPassageiros`.`observacao` (
  `id_obs` INT NOT NULL AUTO_INCREMENT,
  `obs_texto` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id_obs`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `cadastroPassageiros`.`qtd_poltrona` (
  `id_qtd` INT NOT NULL AUTO_INCREMENT,
  `qtd_polt` INT NOT NULL,
  PRIMARY KEY (`id_qtd`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `cadastroPassageiros`.`viagem_data` (
  `id_data` INT NOT NULL AUTO_INCREMENT,
  `v_data` DATE NOT NULL,
  PRIMARY KEY (`id_data`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `cadastroPassageiros`.`telefone` (
  `id_telefone` INT NOT NULL AUTO_INCREMENT,
  `tel_passageiro` BIGINT NOT NULL,
  PRIMARY KEY (`id_telefone`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `cadastroPassageiros`.`nome` (
  `id_nome` INT NOT NULL AUTO_INCREMENT,
  `nome_passageiro` VARCHAR(50) NOT NULL,
  `id_obs` INT NOT NULL ,
  `observacao_id_obs` INT NOT NULL ,
  `qtd_poltrona_id_qtd` INT NOT NULL ,
  `classe_id_classe` INT NOT NULL ,
  `viagem_data_id_data` INT NOT NULL ,
  `telefone_id_telefone` INT NOT NULL ,
  PRIMARY KEY (`id_nome`),
  INDEX `fk_nome_observacao_idx` (`observacao_id_obs` ASC) VISIBLE,
  INDEX `fk_nome_qtd_poltrona1_idx` (`qtd_poltrona_id_qtd` ASC) VISIBLE,
  INDEX `fk_nome_classe1_idx` (`classe_id_classe` ASC) VISIBLE,
  INDEX `fk_nome_viagem_data1_idx` (`viagem_data_id_data` ASC) VISIBLE,
  INDEX `fk_nome_telefone1_idx` (`telefone_id_telefone` ASC) VISIBLE,
  CONSTRAINT `fk_nome_classe1`
    FOREIGN KEY (`classe_id_classe`)
    REFERENCES `cadastroPassageiros`.`classe` (`id_classe`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `fk_nome_observacao`
    FOREIGN KEY (`observacao_id_obs`)
    REFERENCES `cadastroPassageiros`.`observacao` (`id_obs`),
  CONSTRAINT `fk_nome_qtd_poltrona1`
    FOREIGN KEY (`qtd_poltrona_id_qtd`)
    REFERENCES `cadastroPassageiros`.`qtd_poltrona` (`id_qtd`),
  CONSTRAINT `fk_nome_telefone1`
    FOREIGN KEY (`telefone_id_telefone`)
    REFERENCES `cadastroPassageiros`.`telefone` (`id_telefone`),
  CONSTRAINT `fk_nome_viagem_data1`
    FOREIGN KEY (`viagem_data_id_data`)
    REFERENCES `cadastroPassageiros`.`viagem_data` (`id_data`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci




## Linha para execuções e consultas

##para relacionar as tabelas

#select nome.nome_passageiro, observacao.obs_texto from nome inner join observacao on nome.id_obs = observacao.id_obs;

#visualizar dentro das tabelas
#SELECT * FROM cadastroPassageiros.viagem_data;

#INSERT INTO observacao,qtd_poltrona (obs_texto,qtd_poltrona) VALUES ("Teste de texto",5);
#INSERT INTO `cadastroPassageiros`.`observacao` (`obs_texto`) VALUES ('erwrewr');


#BEGIN;
#INSERT INTO observacao ( obs_texto)
#  VALUES('test');
#INSERT INTO qtd_poltrona (qtd_polt) 
#  VALUES(5);
#COMMIT;




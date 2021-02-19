-- MySQL Script generated by MySQL Workbench
-- Sat Feb 20 09:21:13 2021
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `account`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `account` (
  `idaccount` INT NOT NULL,
  `NameUser` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idaccount`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user` (
  `full name` VARCHAR(35) NOT NULL,
  `password` VARCHAR(30) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `phone` INT NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `account_idaccount` INT NOT NULL,
  PRIMARY KEY (`email`, `account_idaccount`),
  INDEX `fk_user_account_idx` (`account_idaccount` ASC) VISIBLE,
  CONSTRAINT `fk_user_account`
    FOREIGN KEY (`account_idaccount`)
    REFERENCES `account` (`idaccount`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `product` (
  `IdProduct` INT NOT NULL,
  `price` INT NOT NULL,
  `NameProduct` VARCHAR(45) NOT NULL,
  `picture` BLOB(100) NOT NULL,
  `descrption` VARCHAR(595) NOT NULL,
  PRIMARY KEY (`IdProduct`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `admin` (
  `idadmin` INT NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `product_IdProduct` INT NOT NULL,
  `account_idaccount` INT NOT NULL,
  PRIMARY KEY (`idadmin`, `product_IdProduct`, `account_idaccount`),
  INDEX `fk_admin_product1_idx` (`product_IdProduct` ASC) VISIBLE,
  INDEX `fk_admin_account1_idx` (`account_idaccount` ASC) VISIBLE,
  CONSTRAINT `fk_admin_product1`
    FOREIGN KEY (`product_IdProduct`)
    REFERENCES `product` (`IdProduct`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_admin_account1`
    FOREIGN KEY (`account_idaccount`)
    REFERENCES `account` (`idaccount`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;